const productModel = require("../models/products");

// Helper: convert multer memory file to base64 data URL
function fileToBase64(file) {
  const mimeType = file.mimetype || "image/jpeg";
  return `data:${mimeType};base64,${file.buffer.toString("base64")}`;
}

class Product {
  async getAllProduct(req, res) {
    try {
      // PERFORMANCE OPTIMIZATION: 
      // Time Complexity: O(N) where N is number of documents, but fetching time is drastically reduced over the network.
      // Space Complexity: O(N) memory consumed in Vercel Serverless Function, but reduced by >60% since we drop the extra base64 strings.
      // 1. Only fetch the FIRST image in the array for the list thumbnail ($slice: 1).
      // 2. Exclude pRatingsReviews array to prevent parsing thousands of nested objects on list view.
      let Products = await productModel
        .find({}, { pRatingsReviews: 0, pImages: { $slice: 1 } })
        .populate("pCategory", "_id cName")
        .sort({ _id: -1 })
        .lean(); // .lean() converts Mongoose documents to raw JS objects instantly, bypassing heavy Mongoose hydration logic.

      if (Products) {
        return res.json({ Products });
      }
    } catch (err) {
      console.log(err);
      return res.json({ error: "Database error: " + err.message });
    }
  }

  async postAddProduct(req, res) {
    let { pName, pDescription, pPrice, pQuantity, pCategory, pOffer, pStatus, pImage } = req.body;
    let images = pImage || [];

    if (
      pName === undefined || pName === "" ||
      !pDescription ||
      pPrice === undefined || pPrice === "" ||
      pQuantity === undefined || pQuantity === "" ||
      !pCategory ||
      pOffer === undefined || pOffer === "" ||
      !pStatus
    ) {
      return res.json({ error: "All filled must be required" });
    } else if (pName.length > 255 || pDescription.length > 3000) {
      return res.json({
        error: "Name 255 & Description must not be 3000 charecter long",
      });
    } else if (images.length !== 2) {
      return res.json({ error: "Must need to provide exactly 2 images" });
    } else {
      try {
        let newProduct = new productModel({
          pImages: images, // already base64 from client
          pName,
          pDescription,
          pPrice,
          pQuantity,
          pCategory,
          pOffer,
          pStatus,
        });
        let save = await newProduct.save();
        if (save) {
          return res.json({ success: "Product created successfully" });
        }
      } catch (err) {
        console.log("Error adding product: ", err);
        return res.json({ error: "Failed to create product: " + err.message });
      }
    }
  }

  async postEditProduct(req, res) {
    let {
      pId,
      pName,
      pDescription,
      pPrice,
      pQuantity,
      pCategory,
      pOffer,
      pStatus,
      pImages,
      pEditImages
    } = req.body;

    if (
      !pId ||
      pName === undefined || pName === "" ||
      !pDescription ||
      pPrice === undefined || pPrice === "" ||
      pQuantity === undefined || pQuantity === "" ||
      !pCategory ||
      pOffer === undefined || pOffer === "" ||
      !pStatus
    ) {
      return res.json({ error: "All filled must be required" });
    } else if (pName.length > 255 || pDescription.length > 3000) {
      return res.json({
        error: "Name 255 & Description must not be 3000 charecter long",
      });
    } else if (pEditImages && pEditImages.length == 1) {
      return res.json({ error: "Must need to provide 2 images" });
    } else {
      let editData = {
        pName,
        pDescription,
        pPrice,
        pQuantity,
        pCategory,
        pOffer,
        pStatus,
      };
      if (pEditImages && pEditImages.length == 2) {
        // already base64 from client
        editData = { ...editData, pImages: pEditImages };
      }
      try {
        await productModel.findByIdAndUpdate(pId, editData);
        return res.json({ success: "Product edit successfully" });
      } catch (err) {
        console.log(err); return res.json({ error: "Database error: " + err.message });
      }
    }
  }

  async getDeleteProduct(req, res) {
    let { pId } = req.body;
    if (!pId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteProduct = await productModel.findByIdAndDelete(pId);
        if (deleteProduct) {
          return res.json({ success: "Product deleted successfully" });
        }
      } catch (err) {
        console.log(err); return res.json({ error: "Database error: " + err.message });
      }
    }
  }

  async getSingleProduct(req, res) {
    let { pId } = req.body;
    if (!pId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let singleProduct = await productModel
          .findById(pId)
          .populate("pCategory", "cName")
          .populate("pRatingsReviews.user", "name email userImage");
        if (singleProduct) {
          return res.json({ Product: singleProduct });
        }
      } catch (err) {
        console.log(err); return res.json({ error: "Database error: " + err.message });
      }
    }
  }

  async getProductByCategory(req, res) {
    let { catId } = req.body;
    if (!catId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let products = await productModel
          .find({ pCategory: catId })
          .populate("pCategory", "cName");
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Search product wrong" });
      }
    }
  }

  async getProductByPrice(req, res) {
    let { price } = req.body;
    if (!price) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let products = await productModel
          .find({ pPrice: { $lt: price } })
          .populate("pCategory", "cName")
          .sort({ pPrice: -1 });
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Filter product wrong" });
      }
    }
  }

  async getWishProduct(req, res) {
    let { productArray } = req.body;
    if (!productArray) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let wishProducts = await productModel.find({
          _id: { $in: productArray },
        });
        if (wishProducts) {
          return res.json({ Products: wishProducts });
        }
      } catch (err) {
        return res.json({ error: "Filter product wrong" });
      }
    }
  }

  async getCartProduct(req, res) {
    let { productArray } = req.body;
    if (!productArray) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let cartProducts = await productModel.find({
          _id: { $in: productArray },
        });
        if (cartProducts) {
          return res.json({ Products: cartProducts });
        }
      } catch (err) {
        return res.json({ error: "Cart product wrong" });
      }
    }
  }

  async postAddReview(req, res) {
    let { pId, uId, rating, review } = req.body;
    if (!pId || !rating || !review || !uId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let checkReviewRatingExists = await productModel.findOne({ _id: pId });
        let alreadyReviewed = false;
        if (checkReviewRatingExists.pRatingsReviews.length > 0) {
          checkReviewRatingExists.pRatingsReviews.forEach((item) => {
            if (item.user.toString() === uId) {
              alreadyReviewed = true;
            }
          });
        }
        if (alreadyReviewed) {
          return res.json({ error: "You already reviewed the product" });
        }
        await productModel.findByIdAndUpdate(pId, {
          $push: {
            pRatingsReviews: { review, user: uId, rating },
          },
        });
        return res.json({ success: "Thanks for your review" });
      } catch (err) {
        return res.json({ error: "Something went wrong" });
      }
    }
  }

  async deleteReview(req, res) {
    let { rId, pId } = req.body;
    if (!rId) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        await productModel.findByIdAndUpdate(pId, {
          $pull: { pRatingsReviews: { _id: rId } },
        });
        return res.json({ success: "Your review is deleted" });
      } catch (err) {
        console.log(err); return res.json({ error: "Database error: " + err.message });
      }
    }
  }
}

const productController = new Product();
module.exports = productController;

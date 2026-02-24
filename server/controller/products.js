const productModel = require("../models/products");

// Helper: convert multer memory file to base64 data URL
function fileToBase64(file) {
  const mimeType = file.mimetype || "image/jpeg";
  return `data:${mimeType};base64,${file.buffer.toString("base64")}`;
}

class Product {
  async getAllProduct(req, res) {
    try {
      let Products = await productModel
        .find({})
        .populate("pCategory", "_id cName")
        .sort({ _id: -1 });
      if (Products) {
        return res.json({ Products });
      }
    } catch (err) {
      console.log(err); return res.json({ error: "Database error: " + err.message });
    }
  }

  async postAddProduct(req, res) {
    let { pName, pDescription, pPrice, pQuantity, pCategory, pOffer, pStatus } =
      req.body;
    let images = req.files;

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
      return res.json({ error: "Must need to provide 2 images" });
    } else {
      try {
        // Convert uploaded files to base64
        let allImages = images.map((img) => fileToBase64(img));

        let newProduct = new productModel({
          pImages: allImages,
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
    } = req.body;
    let editImages = req.files;

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
    } else if (editImages && editImages.length == 1) {
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
      if (editImages && editImages.length == 2) {
        // Convert uploaded files to base64
        let allEditImages = editImages.map((img) => fileToBase64(img));
        editData = { ...editData, pImages: allEditImages };
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

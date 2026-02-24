const categoryModel = require("../models/categories");
const productModel = require("../models/products");
const orderModel = require("../models/orders");
const userModel = require("../models/users");
const customizeModel = require("../models/customize");

// Helper: convert multer memory file to base64 data URL
function fileToBase64(file) {
  const mimeType = file.mimetype || "image/jpeg";
  return `data:${mimeType};base64,${file.buffer.toString("base64")}`;
}

class Customize {
  async getImages(req, res) {
    try {
      let Images = await customizeModel.find({});
      if (Images) {
        return res.json({ Images });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async uploadSlideImage(req, res) {
    if (!req.file) {
      return res.json({ error: "All field required" });
    }
    try {
      // Convert uploaded file to base64 and store in DB
      const image = fileToBase64(req.file);

      let newCustomize = new customizeModel({
        slideImage: image,
      });
      let save = await newCustomize.save();
      if (save) {
        return res.json({ success: "Image upload successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSlideImage(req, res) {
    let { id } = req.body;
    if (!id) {
      return res.json({ error: "All field required" });
    } else {
      try {
        let deleteImage = await customizeModel.findByIdAndDelete(id);
        if (deleteImage) {
          return res.json({ success: "Image deleted successfully" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async getAllData(req, res) {
    try {
      let Categories = await categoryModel.countDocuments();
      let Products = await productModel.countDocuments();
      let Orders = await orderModel.countDocuments();
      let Users = await userModel.countDocuments();
      return res.json({ Categories, Products, Orders, Users });
    } catch (err) {
      console.log(err);
    }
  }
}

const customizeController = new Customize();
module.exports = customizeController;

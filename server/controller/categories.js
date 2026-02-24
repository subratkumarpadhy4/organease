const { toTitleCase } = require("../config/function");
const categoryModel = require("../models/categories");

// Helper: convert multer memory file to base64 data URL
function fileToBase64(file) {
  const mimeType = file.mimetype || "image/jpeg";
  return `data:${mimeType};base64,${file.buffer.toString("base64")}`;
}

class Category {
  async getAllCategory(req, res) {
    try {
      let Categories = await categoryModel.find({}).sort({ _id: -1 });
      if (Categories) {
        return res.json({ Categories });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postAddCategory(req, res) {
    let { cName, cDescription, cStatus } = req.body;

    if (!cName || !cDescription || !cStatus || !req.file) {
      return res.json({ error: "All filled must be required" });
    }

    cName = toTitleCase(cName);
    try {
      let checkCategoryExists = await categoryModel.findOne({ cName: cName });
      if (checkCategoryExists) {
        return res.json({ error: "Category already exists" });
      }

      // Convert uploaded file to base64 and store in DB
      const cImage = fileToBase64(req.file);

      let newCategory = new categoryModel({
        cName,
        cDescription,
        cStatus,
        cImage,
      });
      await newCategory.save();
      return res.json({ success: "Category created successfully" });
    } catch (err) {
      console.log(err);
      return res.json({ error: "Something went wrong" });
    }
  }

  async postEditCategory(req, res) {
    let { cId, cDescription, cStatus } = req.body;
    if (!cId || !cDescription || !cStatus) {
      return res.json({ error: "All filled must be required" });
    }
    try {
      let editCategory = categoryModel.findByIdAndUpdate(cId, {
        cDescription,
        cStatus,
        updatedAt: Date.now(),
      });
      let edit = await editCategory.exec();
      if (edit) {
        return res.json({ success: "Category edit successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getDeleteCategory(req, res) {
    let { cId } = req.body;
    if (!cId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteCategory = await categoryModel.findByIdAndDelete(cId);
        if (deleteCategory) {
          return res.json({ success: "Category deleted successfully" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

const categoryController = new Category();
module.exports = categoryController;

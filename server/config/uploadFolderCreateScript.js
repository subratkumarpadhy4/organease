const fs = require("fs");

const categoriesFolder = "./public/uploads/categories";
const customizeFolder = "./public/uploads/customize";
const productsFolder = "./public/uploads/products";

const CreateAllFolder = () => {
  try {
    if (!fs.existsSync(categoriesFolder)) {
      fs.mkdirSync(categoriesFolder, {
        recursive: true,
      });
    }

    if (!fs.existsSync(customizeFolder)) {
      fs.mkdirSync(customizeFolder, {
        recursive: true,
      });
    }

    if (!fs.existsSync(productsFolder)) {
      fs.mkdirSync(productsFolder, {
        recursive: true,
      });
    }
  } catch (err) {
    console.log("Skipping folder creation: running on a read-only file system (Vercel).");
  }
};

module.exports = CreateAllFolder;

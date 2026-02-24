const express = require("express");
const router = express.Router();
const customizeController = require("../controller/customize");
const multer = require("multer");

// Use memory storage instead of disk (Vercel has read-only filesystem)
const upload = multer({ storage: multer.memoryStorage() });

router.get("/get-slide-image", customizeController.getImages);
router.post("/delete-slide-image", customizeController.deleteSlideImage);
router.post(
  "/upload-slide-image",
  upload.single("image"),
  customizeController.uploadSlideImage
);
router.post("/dashboard-data", customizeController.getAllData);

module.exports = router;

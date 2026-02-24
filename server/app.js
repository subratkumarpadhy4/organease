const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");
const CreateAllFolder = require("./config/uploadFolderCreateScript");

const app = express();

/* Create All Uploads Folder if not exists | For Uploading Images */
CreateAllFolder();

// ---- CORS must run before any DB errors so frontend sees real responses ----
app.use(
  cors({
    origin: "*",
  })
);

// ---- DB connection (safe for serverless) ----
const cached = global.__mongooseCached || (global.__mongooseCached = { conn: null, promise: null });

async function connectToDatabase() {
  const uri = process.env.DATABASE;
  if (!uri) throw new Error("Missing env DATABASE");

  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Ensure DB is connected before routes
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.status(200).send("OK"));
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);

module.exports = app;


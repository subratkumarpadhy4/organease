const app = require("./app");

// Keep /api/health for quick checks
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    db_defined: !!process.env.DATABASE,
    db_length: process.env.DATABASE ? process.env.DATABASE.length : 0,
    node_version: process.version,
  });
});

// Run Server (local dev / traditional hosting)
if (require.main === module) {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
}

module.exports = app;

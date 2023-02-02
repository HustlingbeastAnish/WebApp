const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/databaseName", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

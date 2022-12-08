const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("BackEnd");
});

// Connection with MongoDB
const connectDB = require("./server/database/connection");
app.listen(3000, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./server/database/connection");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  res.send("BackEnd");
});
app.use(morgan("tiny"));
// Connection with MongoDB
connectDB();
app.listen(3000, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);
});

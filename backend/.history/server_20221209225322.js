const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const connectDB = require("./server/database/connection");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");

dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  res.send("BackEnd");
});
app.use(morgan("tiny"));
// Connection with MongoDB
connectDB();

//Parse Request to the Body
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);
});

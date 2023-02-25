const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const connectDB = require("./server/database/connection");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// var cors = require("cors");

// app.use(cors());
// const bodyparser = require("body-parser");
mongoose.set("strictQuery", true);
dotenv.config({ path: "./config.env" });

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("BackEnd");
});
app.use(morgan("tiny"));
// Connection with MongoDB
connectDB();

//Parse Request to the Body
// app.use(bodyparser.urlencoded({ extended: true }));

// To Load The routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);
});

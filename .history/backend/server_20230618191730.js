const express = require("express");
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
const PORT = process.env.PORT || 8080;
=======
const PORT = process.env.PORT || 3002;
>>>>>>> f506ea1b3caae3daf793fd2b1a4017c0a078c3f8
const connectDB = require("./server/database/connection");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

var cors = require("cors");

app.use(cors());
mongoose.set("strictQuery", true);
<<<<<<< HEAD

// config is used to set the path of env file
dotenv.config({ path: "./.env" });
=======
dotenv.config({ path: "./config.env" });
>>>>>>> f506ea1b3caae3daf793fd2b1a4017c0a078c3f8
// app.set("veiw engine", "html");
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

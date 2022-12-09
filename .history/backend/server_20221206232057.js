const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, re) => {
  res.send("BackEnd");
});

app.listen(3000, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);
});

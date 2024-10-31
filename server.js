const express = require("express");
const app = express();
let toiletStatus = "available";

app.use(express.static("public"));

app.get("/status", (req, res) => {
  res.json({ status: toiletStatus });
});

app.post("/toggle", (req, res) => {
  toiletStatus = toiletStatus === "available" ? "occupied" : "available";
  res.json({ status: toiletStatus });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

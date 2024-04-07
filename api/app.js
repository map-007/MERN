import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("it works!");
});

app.listen(8080, () => {
  console.log("Server is running!");
});

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("router is working");
});

export default router;

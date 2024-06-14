const express = require("express");
const router = express.Router();
const { Posts } = require("../models/");

router.get("/", (req, res) => {
  res.json("Server is running on port 3001");
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    console.log("Recebido",req.body);
    const cretedPost = await Posts.create(post);
    res.json(cretedPost);
  } catch (error) {
    console.error("Erro ao criar o post",error);
    res.status(500).json({ error: "Erro ao tentar criar o Post" });
  }
});

module.exports = router;

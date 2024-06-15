const express = require('express');
const router = express.Router();
const { Post } = require('../models');

console.log('Modelo Post:', Post);

router.post('/', async (req, res) => {
  const post = req.body;
  console.log('Recebido', post);
  try {
    const createdPost = await Post.create(post);
    res.json(createdPost);
  } catch (error) {
    console.error('Erro ao criar o post:', error);
    res.status(500).json({ error: 'Erro ao criar o post' });
  }
});

router.get("/", (req, res) => {
  res.json("Server is running on port 3001");
});

module.exports = router;

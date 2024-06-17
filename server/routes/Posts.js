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

router.get("/", async (req, res) => {
  try{
  const listOfPosts = await Post.findAll();
  res.json(listOfPosts);
}catch (error) {
  console.error('Erro ao buscar posts:', error);
  res.status(500).json({ error: 'Erro ao buscar posts' });
}
  });

module.exports = router;

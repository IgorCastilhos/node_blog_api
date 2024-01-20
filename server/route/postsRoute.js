const express = require("express");
// Invoca o roteador que possibilita distribuir as rotas
const router = express.Router();
const postsService = require("../service/postsService");

// GET Route - Recupera todos os posts
router.get("/posts", async function (req, res) {
  const posts = await postsService.getPosts();
  res.json(posts);
});

// POST Route - Cria um post
router.post("/posts", async function (req, res) {
  const post = req.body;
  const newPost = await postsService.savePost(post);
  res.status(201).json(newPost);
});

// PUT Route - Atualiza um post conforme o seu id
router.put('/posts/:id', async function (req, res) {
  const post = req.body;
  try {
    await postsService.updatePost(req.params.id, post);
    res.status(204).end();

  } catch (e){
    res.status(404).send(e.message);
  }

});

// DELETE Route -
router.delete('/posts/:id', async function (req, res) {
  await postsService.deletePost(req.params.id);
  res.status(204).end();
});

module.exports = router;


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
  res.json(newPost);
});

// PUT Route - Atualiza um post conforme o seu id
router.put("/posts/:id", async function (req, res) {
  const post = req.body;
  await postsService.updatePost(req.params.id, post);
  res.end()
});

// DELETE Route -
router.delete("/posts/:id", async function (req, res) {
  await postsService.deletePost(req.params.id);
  res.end()
});

module.exports = router;


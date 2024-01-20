const axios = require("axios");
const crypto = require("crypto");
const postsService = require("../service/postsService");

const generate = function () {
  return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
  return axios({url, method, data, validateStatus: false});
};

// GET TEST
test("Should get posts", async function () {
  // given - dado que
  const post1 = await postsService.savePost({title: generate(), content: generate()});
  const post2 = await postsService.savePost({title: generate(), content: generate()});
  const post3 = await postsService.savePost({title: generate(), content: generate()});
  // when = quando acontecer
  const response = await request("http://localhost:3000/posts", "get");
  expect(response.status).toBe(200);
  const posts = response.data;
  // then - então
  expect(posts).toHaveLength(3);
  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
});

// SAVE TEST
test("Should save post", async function () {
  const data = {title: generate(), content: generate()};
  const response = await request("http://localhost:3000/posts", "post", data);
  expect(response.status).toBe(201);
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await postsService.deletePost(post.id);
});

// UPDATE TEST
test("Should update post", async function () {
  const post = await postsService.savePost({title: generate(), content: generate()});

  post.title = generate();
  post.content = generate();

  const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
  expect(response.status).toBe(204);
  const updatedPost = await postsService.getPost(post.id);
  expect(updatedPost.title).toBe(post.title);
  expect(updatedPost.content).toBe(post.content);
  await postsService.deletePost(post.id);
});

// UPDATE ERROR TEST
test.only("Should not update post", async function () {
  const post = {
    id: 1
  };
  const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
  expect(response.status).toBe(404);
});

// DELETE TEST
test("Should delete a post", async function () {
  const post = await postsService.savePost({title: generate(), content: generate()});
  const response = await request(`http://localhost:3000/posts/${post.id}`, 'delete');
  expect(response.status).toBe(204);
  const posts = await postsService.getPosts();
  expect(posts).toHaveLength(0);
});

const express = require("express");
const axios = require("axios");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/comments", async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is 10 if not provided in the query
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}`
    );
    const comments = response.data;
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// GET /api/posts
app.get('/api/posts', async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is 10 if not provided in the query
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});



// Catching all Undefined Routes
app.use("*", (req, res) => {
  return res.status(404).json({
    status: false,
    message: `Route ${req.originalUrl} not found`,
  });
});


// Starting the server

(async () => {
  app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
  });
})();
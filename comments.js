// Create web server
// 1. Create a new Express server
// 2. Create a new route for GET requests to '/comments'
// 3. Create a new route for POST requests to '/comments'
// 4. Create a new route for DELETE requests to '/comments/:id'
// 5. Create a new route for PUT requests to '/comments/:id'
// 6. Create a new route for PATCH requests to '/comments/:id'
// 7. Start the Express server on port 3000

// 1. Create a new Express server
const express = require('express');
const app = express();

// 2. Create a new route for GET requests to '/comments'
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage');
});

// 3. Create a new route for POST requests to '/comments'
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

// 4. Create a new route for DELETE requests to '/comments/:id'
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE request to the homepage');
});

// 5. Create a new route for PUT requests to '/comments/:id'
app.put('/comments/:id', (req, res) => {
  res.send('PUT request to the homepage');
});

// 6. Create a new route for PATCH requests to '/comments/:id'
app.patch('/comments/:id', (req, res) => {
  res.send('PATCH request to the homepage');
});

// 7. Start the Express server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// End Path: comments.js

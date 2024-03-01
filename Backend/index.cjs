const express = require('express');
const path = require('path'); // Make sure to require 'path'
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  // Use path.join for better path resolution and cross-platform compatibility
  res.sendFile(path.join(__dirname, 'LoginForm/login.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

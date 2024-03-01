const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/LoginForm/login.html'); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

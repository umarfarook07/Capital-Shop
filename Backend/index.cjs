const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/:username', (req, res) => {
  
  const { username } = req.params;

  res.render("Collection", { username });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Serve static files
app.use(express.static(__dirname));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Waff-Wich app running on port ${PORT}`);
});
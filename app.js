const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000; // Choose a port

// Serve images from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a route to serve the JSON data
app.get('/api/data', (req, res) => {
  fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

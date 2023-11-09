const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the CI Server!. Testing the CI-Dev pipeline.');
  res.sendFile('index.html', { root: __dirname });
});

app.get('/hello', (req, res) => {
  res.status(200).send('Hello Oklaa Dev Teams, there! This is a friendly greeting from the CI Dev-server.');
  res.sendFile('index.html', { root: __dirname });
});


app.get('/about', (req, res) => {
  res.status(200).json({
    message: 'About CI-Dev Server',
    description: 'This is a simple Express.js CI Dev-server for development purposes.',
    version: '1.0'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

// for learning and practicing

const express = require('express');
const app = express();
const PORT = 3001;

// Responds to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Responds to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Responds to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Route with HTML response
app.get('/html', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Express routing</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; }
                    h1 { color: #0066cc; }
                    p { margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <div>
                <h1>Response from HTML</h1>
                <p>This response was sent using express routing</p>
                <p>Other routes: <a href="/">/</a> | <a href="/about">about</a> </p>
                </div>
            </body>
        </html>
        `);
});

// Start the server
app.listen(PORT, () => {
    // callback to know when the server is running
  console.log(`Example app listening at http://localhost:${PORT}`);
});
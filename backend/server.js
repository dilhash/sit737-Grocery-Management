const express = require('express');
const path = require('path');  // Required for path resolution

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Define a route for the '/api/message' endpoint
app.get('/api/message', (req, res) => {
    res.send('Hello from the back-end (API message)!');  // Replace with your actual message logic
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

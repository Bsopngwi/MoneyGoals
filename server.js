const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware to parse request body
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Mock endpoint to get user data (store user state, mock DB for now)
app.get('/data', (req, res) => {
    res.sendFile(__dirname + '/data/data.json');
});

// Endpoint for user data save (mock DB persist)
app.post('/save', (req, res) => {
    fs.writeFile('./data/data.json', JSON.stringify(req.body), (err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.send('Data saved');
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});

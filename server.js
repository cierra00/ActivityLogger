const express = require('express');
const path = require('path');
const EventEmitter = require('events');


const app = express();
const PORT = 3000;

const eventEmitter = new EventEmitter();

eventEmitter.on('action', (action)=>{
    console.log(`actoion occured: ${action}`)
});

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');
const EventEmitter = require('events');

const app = express();
const PORT = 3000;

const eventEmitter = new EventEmitter();

eventEmitter.on('action', (log)=>{
    console.log(`actoion occured: ${log}`)
});

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/message', (req, res) => {
    const {event, timestamp} = req.body;
    console.log('event', event, 'timestamp', timestamp)
    if(event && timestamp){
    console.log('Interaction logged:', req?.body);
    res.json({ message: 'Interaction logged successfully', data: req?.body });
}else {
    console.error('Invalid interaction:', req.body); 

    res.status(400).json({ message: 'Invalid interaction data', data: req.body });
}
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

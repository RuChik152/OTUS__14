import express from 'express';
import http from 'http';
import {Server} from "socket.io"



const app = express();
const server = new http.Server(app);
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

io.on('connection',  (socket) => {
    console.log('a use connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
})

server.listen(3002, () => {
    console.log(`SERVER START http://localhost:${3002}`);
});
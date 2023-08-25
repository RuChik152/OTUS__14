import express from 'express';
import http from 'http';
import getAllUsers from "./routes/getAllUsers";

const app = express();
const server = new http.Server(app);

server.listen(3002);


app.get('/users/all', getAllUsers);
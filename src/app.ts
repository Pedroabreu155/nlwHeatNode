import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { router } from './routes';

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => socket);

app.use(cors());
app.use(express.json());
app.use(router);

export { serverHttp, io };

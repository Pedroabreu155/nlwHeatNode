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

io.on('connection', socket => {
  console.log(`User conectado no socket ${socket.id}`);
});

app.use(cors());
app.use(express.json());
app.use(router);

serverHttp.listen(4000, () => console.log(`App is running on port 4000 🔥`));

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import movementRoutes from './routes/movements.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use('/movements', movementRoutes);

app.get('/', (req, res) => {
    res.send('Your one rep maxes, together');
    res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));


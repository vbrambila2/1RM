import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import movementRoutes from './routes/movements.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use('/movements', movementRoutes);

app.get('/', (req, res) => {
    res.send('Your one rep maxes, together');
});

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));


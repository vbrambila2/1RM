import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import movementRoutes from './routes/movements.js';
import dotenv from 'dotenv';

const corsOptions ={
   origin:'*', 
   credentials:true,       
   optionSuccessStatus:200,
}

const app = express();
dotenv.config();

app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: true }));
app.use('/movements', movementRoutes);

app.get('/', (req, res) => {
    res.send('Your one rep maxes, together');
});

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));


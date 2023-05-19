import express from 'express';
import cors from 'cors';
import logger from 'morgan';

// routes
import streamRouter from './modules/stream/stream.controller';


const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/stream', streamRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Starting streaming');
    console.log(`Server running on port http://localhost:${PORT}`);
})
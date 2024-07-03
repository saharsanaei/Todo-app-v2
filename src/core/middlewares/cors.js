import cors from 'cors';

export const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend URL
    optionsSuccessStatus: 200
};

export const enableCors = cors(corsOptions);
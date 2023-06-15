import express from 'express';
import authsRouter from './router/auths.js';
import cookieParser from 'cookie-parser';
const app = express();



// middlware
app.use(express.json());
app.use(cookieParser());


app.use('/api/auths', authsRouter);
// app.get('/', (req, res) => {
//     res.status(200).json('Backend');
// });






app.listen(8080, () => {
    console.log("Backend is working!");
});
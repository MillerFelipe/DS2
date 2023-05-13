import express, {Request, Response, NextFunction, Router} from "express"
import 'express-async-errors'
import router from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(router);
app.use(cors);

app.listen(3333, () => console.log('Servidor ON'));
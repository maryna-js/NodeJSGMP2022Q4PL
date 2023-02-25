import express, { Request, Response } from 'express';
import userRouter from './src/router/user.router';
import groupRouter from './src/router/group.router';

import Logger from './logger';

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(groupRouter);

app.use((error: Error, req: Request, res: Response) => {
    Logger.error(error);
    return res.status(500).send({
        error: [
            {
                method: req.method,
                body: req.body,
                params: req.params,
                message: error,
            },
        ],
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
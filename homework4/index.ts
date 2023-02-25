import express, { Request, Response } from 'express';
import userRouter from './src/router/user.router';
import groupRouter from './src/router/group.router';

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(groupRouter);

app.use((error: Error, req: Request, res: Response) => {
    return res.status(401).send({
        error: [
            {
                message: error,
            },
        ],
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
import express, { Request, Response } from 'express';
import routes from './src/router';

const app = express();
app.use(express.json());

app.use(routes);

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
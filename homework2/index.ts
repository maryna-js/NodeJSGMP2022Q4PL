import express, { Request, Response } from 'express';
import { v4 } from 'uuid';
import { data } from './src/data/data';
import { User } from './src/models/user'
import { schema, deleteSchema} from "./src/models/schema";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send({data});
});

app.get('/users/:id', (req, res, next) => {
    const { params } = req;
    const index = data.findIndex((user: User) => user.id === params.id);
    if (index === -1) {
        return next('The user does not exist');
    }
    return res.json({data: data[index]});
});

app.post('/users', async (req: Request<{}, {}, User>, res) => {
    const { body } = req;
    const { error } = schema.validate(body, {
             abortEarly: false,
             allowUnknown: false
         });
    if(error) res.status(400).json({ error: error });
    const { login, password, age, isDeleted } = body;
    data.push({id: v4(), login, password, age, isDeleted});
    return res.send('Successfully created');
});

app.put('/users/:id', async (req: Request<{ id:string }, {}, User>, res) => {
    const { body, params } = req;
    const user = data.findIndex((user: User) => user.id === params.id);
    const { error } = schema.validate(body, {
        abortEarly: false,
        allowUnknown: false
    });
    if(error) res.status(400).json({ error: "Id not found" });
    data[user] = body;
    return res.send(body);
});

app.delete('/users', async (req: Request<{ id:string }, {}, User>, res) => {
    const { body } = req;
    const user = data.findIndex((user: User) => user.id === body.id);
    const { error } = deleteSchema.validate(body, {
        abortEarly: false,
        allowUnknown: false
    });
    if(error) res.status(400).json({ error: "Id not found" });
    data[user].isDeleted = true;
    return res.send("Successfully deleted");
});

app.get(
    '/users',
    (
        req: Request<{}, {}, {}, {loginSubstring: string; limit: string}>,
        res
    ) => {
        const {loginSubstring, limit} = req.query;
        const users: User[] = [];
        let count = 0;
        data.filter(user => {
            if (count < parseInt(limit) && user.login.includes(loginSubstring)) {
                users.push(user);
                count++;
            }
        });
        res.send(users);
    },
);

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
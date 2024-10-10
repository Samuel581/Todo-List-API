import express, { Request, Response } from 'express';
import dotnenv from 'dotenv';

dotnenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Todo List API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
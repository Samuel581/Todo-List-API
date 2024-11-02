import express, { Request, Response } from 'express';
import dotnenv from 'dotenv';
import mainRouter from './routes/main.route';
import { setupSwagger } from './swagger/swagger';

dotnenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
setupSwagger(app);
app.use('/api', mainRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Todo List API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
import express, { Request, Response } from 'express';
import mainRouter from '../src/routes/main.route';
import { setupSwagger } from '../src/swagger/swagger';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Main routes
app.use('/api', mainRouter);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the Todo List API!');
});

// Export the app (no app.listen())
export default app;

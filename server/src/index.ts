import express from 'express';
import cors from 'cors';
import helloRoutes from './routes/hello';
import userRoutes from './routes/users';

const app = express();

app.use(cors());
app.use(express.json()); // ⬅️ זו השורה החסרה

app.use('/api', helloRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});

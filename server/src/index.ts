import express from 'express';
import cors from 'cors';
import helloRoutes from './routes/hello';

const app = express();
app.use(cors());

app.use('/api', helloRoutes);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});

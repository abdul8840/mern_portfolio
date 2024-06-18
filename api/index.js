import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config();

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO).then(
  () => console.log('Connected to MongoDB'),
).catch(
  (err) => console.error(err),
)

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port 8000!');
});

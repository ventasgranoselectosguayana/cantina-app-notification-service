import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import notificationRoutes from './routes/notificationRoutes.js'; // Asegúrate de que esta ruta sea correcta
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Rutas
app.use('/notifications', notificationRoutes);

// Manejo de errores global
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});
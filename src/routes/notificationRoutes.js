import express from 'express';
import { sendNotificationHandler } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/', sendNotificationHandler);

export default router;
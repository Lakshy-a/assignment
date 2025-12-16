import express from 'express';
const router = express.Router();

import { signup, login, currentuser } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

router.post('/register', signup);
router.post('/login', login);
router.get('/me', authMiddleware, currentuser);

export default router;

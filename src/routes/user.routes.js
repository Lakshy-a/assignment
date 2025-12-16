import express from 'express';
const router = express.Router();

import { authMiddleware } from '../middlewares/auth.middleware.js';
import { getRegisteredUsers, searchUser } from '../controllers/user.controller.js';

router.get('/allUsers', authMiddleware, getRegisteredUsers);
router.get('/search', authMiddleware, searchUser);

export default router;

import jwt from 'jsonwebtoken';
import { errorResponse } from '../config/response.js';
import userModel from '../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return errorResponse(res, 'Access token missing', 401);
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return errorResponse(res, 'User not found', 404);
        }
        req.user = user;
        next();
    } catch (err) {
        return errorResponse(res, 'Invalid or expired token', 403);
    }
}
import userModel from "../models/user.model.js"
import { successResponse, errorResponse } from "../config/response.js"
import { generateAccessToken } from "../config/tokenGeneration.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return errorResponse(res, 'User already exists', 409);
        }

        const user = new userModel({ fullName, email, password });
        await user.save();

        return successResponse(res, { id: user._id, email: user.email }, 'User registered successfully', 201);
    } catch (error) {
        errorResponse(res, error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user)
            return errorResponse(res, 'No user exist with this email', 404);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return errorResponse(res, 'Invalid email or password', 401);
        }

        const payload = {
            id: user._id,
            fullnName: user.fullnName,
            email: user.email,
        }

        const accessToken = generateAccessToken(payload);

        successResponse(res, { accessToken }, "User logged in successfully")
    } catch (error) {
        errorResponse(res, error)
    }
}

export const currentuser = async (req, res, next) => {
    try {
        const user = req.user;
        successResponse(res, { id: user._id, fullName: user.fullName, email: user.email }, "Current user fetched successfully");
    } catch (error) {
        errorResponse(res, error);
    }
};

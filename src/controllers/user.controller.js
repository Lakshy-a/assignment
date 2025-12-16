import { errorResponse, successResponse } from "../config/response.js";
import userModel from "../models/user.model.js";


export const getRegisteredUsers = async (req, res, next) => {
    try {
        const users = await userModel.find({
            _id: {
                $ne: req.user._id
            }
        }, 'fullName email');
        successResponse(res, { users }, "Registered users fetched successfully");
    } catch (error) {
        errorResponse(res, error);
    }
}

export const searchUser = async (req, res, next) => {
    try {
        const { query } = req.query;
        const users = await userModel.find({
            _id: { $ne: req.user._id },
            $or: [
                { fullName: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        }, 'fullName email');
        successResponse(res, { users }, "User search results fetched successfully");
    } catch (error) {
        errorResponse(res, error);
    }
}

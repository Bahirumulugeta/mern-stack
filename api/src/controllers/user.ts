import { createUserService,getAllUsersService } from "../services/user";
import { RequestHandler } from "express";
import { ICreateUser } from "../types/user";
import hashPassword from "../utils/hashPassword";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = <ICreateUser>req.body;
    data.password = hashPassword(data.password);
    const user = await createUserService(data);

    // Response
    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      status: "Success",
      data: users
    });
  } catch (error) {
    next(error);
  }
};

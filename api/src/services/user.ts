import IUserDoc, { ICreateUser } from "../types/user";
import { User } from "../repositories/user";
export const createUserService = async (
  userData: ICreateUser
): Promise<ICreateUser> => {
  return User.createUser(userData);
};

export const getAllUsersService = async (): Promise<IUserDoc[]> => {
  return User.getAllUsers();
};

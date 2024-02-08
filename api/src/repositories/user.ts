import IUserDoc, { ICreateUser } from "../types/user";
import UserModel from "../entities/user";
export class User {
  static async createUser(data: ICreateUser): Promise<IUserDoc> {
    try {
      const user = await UserModel.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers(): Promise<IUserDoc[]> {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error) {
      throw error;
    }
  }
}

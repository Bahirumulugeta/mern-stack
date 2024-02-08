import { Document } from "mongoose";

export default interface IUserDoc extends Document {
    full_name: string;
    email: string;
    password: string;
    password_changed_at: Date;
    created_at: Date;
    updated_at: Date;
    checkPasswordChange: (iat: number) => boolean;
}

export interface ICreateUser {
    full_name: string;
    email: string;
    password: string;
}
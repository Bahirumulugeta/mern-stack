import { Document } from "mongoose";

export default interface IOrderDoc extends Document {
  userId: string;
  bookId: string;
  address: string;
  quantity: number;
  total_Price: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  markAsCompleted(): Promise<void>; 

}

export interface ICreateOrder {
    userId: string;
    bookId: string;
    address: string;
    quantity: number;
    totalPrice: number;
}

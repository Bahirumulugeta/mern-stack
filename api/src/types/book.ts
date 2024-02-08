import { Document } from "mongoose";

export default interface IBookDoc extends Document {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  price: number;
  writer: string;
  status: "Active" | "Inactive";
  created_at: Date;
  updated_at: Date;
}

export interface ICreateBook {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  price: number;
  writer: string;
}

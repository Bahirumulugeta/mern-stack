import IBookDoc, { ICreateBook } from "../types/book";
import BookModel from "../entities/book";
export class Book {
  static async createBook(data: ICreateBook): Promise<IBookDoc> {
    try {
      const book = await BookModel.create(data);

      return book;
    } catch (error) {
      throw error;
    }
  }
  static async getAllBooks(): Promise<IBookDoc[]> {
    try {
      const books = await BookModel.find({});
      return books;
    } catch (error) {
      throw error;
    }
  }
}

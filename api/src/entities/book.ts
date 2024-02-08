import IBookDoc from "../types/book";
import mongoose, { Schema } from "mongoose";

const bookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
      minlength: [1, "Title cannot be less than 1 character"],
    },
    description: {
      type: String,
      required: [true, "Title description is required"],
      minlength: [5, "Title description cannot be less than 5 characters"],
    },
    image: String,
    tags: [String],
    price: {
      type: Number,
      required: [true, "Price for the book is required"],
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Writer is required"],
    },
    status: {
      type: String,
      default: "Active",
      enum: {
        values: ["Active", "Inactive"],
        message: "Invalid or unknown status",
      },
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Populate foreign fields
bookSchema.pre<IBookDoc>("find", function (next) {
  this.populate({ path: "writer", select: "full_name" });
  next();
});
// Create model
const Book = mongoose.model<IBookDoc>("book", bookSchema);
export default Book;

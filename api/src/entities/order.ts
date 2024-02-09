import IOrderDoc from "../types/order";
import mongoose, { Schema } from "mongoose";

const orderSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required"],
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "book",
      required: [true, "Book is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      unique: true,
      maxlength: [100, "Address cannot exceed 100 characters"],
      minlength: [1, "Address cannot be less than 1 character"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity for the book is required"],
    },

    total_price: {
      type: Number,
      required: [true, "Total price for the book is required"],
    },

    status: {
      type: String,
      default: "Pending",
      enum: {
        values: ["Pending", "Cancelled", "Completed"],
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
orderSchema.pre<IOrderDoc>("find", async function (next) {
  (await this.populate({ path: "userId", select: "full_name" })).populate({
    path: "bookId",
    select: "title",
  });

  next();
});
// Method to mark the order as completed
orderSchema.methods.markAsCompleted = async function (): Promise<void> {
  this.status = "Completed";
  await this.save();
};
// Create model
const Order = mongoose.model<IOrderDoc>("order", orderSchema);
export default Order;

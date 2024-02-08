import IUserDoc from "../types/user";
import mongoose, { Schema } from "mongoose";
import validator from "validator";

const userSchema: Schema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: () => {
          validator.isEmail;
        },
        message: "Invalid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    password_changed_at: Date,
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

userSchema.methods.checkPasswordChange = function (
  this: IUserDoc,
  iat: number
): boolean {
  if (this.password_changed_at) {
    const pswdChngdAtInNumber = Math.round(
      this.password_changed_at.getTime() / 1000
    );
    return pswdChngdAtInNumber > iat;
  }
  return false;
};

// Create model
const User = mongoose.model<IUserDoc>("user", userSchema);
export default User;

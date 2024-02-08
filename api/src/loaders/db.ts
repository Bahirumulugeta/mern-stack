import mongoose, { Connection } from "mongoose";
import configs from "../configs";

export default (): Connection => {
  mongoose
    .connect(configs.db)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
  const mongoDb = mongoose.connection;

  mongoDb.on("error", (err) => {
    console.log("Error occurred: ", err);
  });

  mongoDb.on("disconnected", () => {
    console.log("Disconnected from mongoDB");
  });

  return mongoDb;
};

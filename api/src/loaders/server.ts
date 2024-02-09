import express from "express";
const app = express();
import userRouter from "../routes/user";
import bookRouter from "../routes/book"
import orderRouter from '../routes/order'
// Use third party middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/orders", orderRouter);

export default app;

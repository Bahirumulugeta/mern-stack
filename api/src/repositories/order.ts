import IOrderDoc, { ICreateOrder } from "../types/order";
import OrderModel from "../entities/order";
export class Order {
  static async createOrder(data: ICreateOrder): Promise<IOrderDoc> {
    try {
      const order = await OrderModel.create(data);
      await order.markAsCompleted(); // change the status
      return order;
    } catch (error) {
      throw error;
    }
  }
  static async getAllOrders(): Promise<IOrderDoc[]> {
    try {
      const orders = await OrderModel.find({});
      return orders;
    } catch (error) {
      throw error;
    }
  }
  static async cancelOrder(id: string): Promise<boolean> {
    try {
      const order = await OrderModel.findById(id);
      if (!order) return false;
      order.status = "Cancelled";
      await order.save();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

import IOrderDoc, { ICreateOrder } from "../types/order";
import { Order } from "../repositories/order";
export const createOrderService = async (
  orderData: ICreateOrder
): Promise<IOrderDoc> => {
  return Order.createOrder(orderData);
};

export const getAllOrdersService = async (): Promise<IOrderDoc[]> => {
  return Order.getAllOrders();
};
export const cancelOrderService = async (id:string): Promise<boolean> => {
  return Order.cancelOrder(id);
};

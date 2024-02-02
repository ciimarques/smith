import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { Product } from '../types/Product';

async function getOrderWithProducts(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  const result: Order[] = orders.map((order: any) => { 
    const productIds: number[] = order.productIds
      ? order.productIds.map((product: Product) => product.id) : [];
    return {
      id: order.id,
      userId: order.userId,
      productIds,
    };
  });
  return result;
}

export default {
  getOrderWithProducts,
};

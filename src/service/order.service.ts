import { Op } from 'sequelize';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { Product } from '../types/Product';
import UserModel from '../database/models/user.model';

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

async function orderCreate(userId: number, productIds: number[]): Promise<any> {
  const user = await UserModel.findByPk(userId);
  if (!user) {
    throw new Error('"userId" not found');
  }
  const newOrder = await OrderModel.create({ userId });
  await ProductModel.update({
    orderId: newOrder.dataValues.id,
  }, { 
    where: { 
      id: {
        [Op.in]: productIds,
      },
    },
  });
  return {
    userId,
    productIds,
  };
}

export default {
  getOrderWithProducts,
  orderCreate,
};

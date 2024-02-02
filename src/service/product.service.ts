import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import OrderModel from '../database/models/order.model'; 
import { Product } from '../types/Product';

async function createProduct(productData: Product): Promise<Product> {
  const order = await OrderModel.findByPk(productData.orderId);
  if (order) {
    throw new Error('já existe order');
  } else {
    const newProd = await ProductModel.create(productData);
    return { 
      id: newProd.dataValues.id,
      name: productData.name,
      price: productData.price,     
    };
  }     
}

async function productGetAll(): Promise<ProductSequelizeModel[]> {
  const productAll = await ProductModel.findAll();
  return productAll;
}

export default {
  createProduct,
  productGetAll,
};

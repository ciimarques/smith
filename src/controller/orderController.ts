import { Response, Request } from 'express';
import orderService from '../service/order.service';

async function getProductWithOrder(_req: Request, res: Response): Promise<void> {  
  try {
    const result = await orderService.getOrderWithProducts();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao processar sua solicitação');
  }
}

async function createOrder(req:Request, res: Response): Promise<void> {
  const { userId, productIds } = req.body;
  try {
    const result = await orderService.orderCreate(userId, productIds);
    res.status(201).json(result);
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(404).json({ message });
  }
}
export default {
  getProductWithOrder,
  createOrder,
};

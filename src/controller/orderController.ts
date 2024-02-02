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

export default {
  getProductWithOrder,
};

import { Request, Response } from 'express';
import productService from '../service/product.service';

async function productCreate(req: Request, res: Response): Promise<void> {
  try {
    const productData = req.body;
    const result = await productService.createProduct(productData);
    res.status(201).json(result); 
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(400).json({ message });
  }
}

export default {
  productCreate, 
};

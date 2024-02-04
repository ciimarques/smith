import { Request, Response, NextFunction } from 'express';

function ValidateUser(userId: number, res: Response) {
  if (!userId) {
    res.status(400).json({ message: '"userId" is required' });
    return false;
  }
  if (typeof userId !== 'number') {
    res.status(422).json({ message: '"userId" must be a number' });
    return false;
  }
  return true;
}

function validateProduct(productIds: number [], res: Response) {
  if (!productIds) {
    res.status(400).json({ message: '"productIds" is required' });
    return false;
  }
  if (!Array.isArray(productIds)) {
    res.status(422).json({ message: '"productIds" must be an array' });
    return false;
  }
  if (productIds.length === 0) {
    res.status(422).json({ message: '"productIds" must include only numbers' });
    return false;
  }
  return true;
}

function validateOrder(req: Request, res: Response, next: NextFunction): void {
  const { userId, productIds } = req.body;

  if (!ValidateUser(userId, res)) return;
  if (!validateProduct(productIds, res)) return;
 
  next();
}

export default validateOrder;
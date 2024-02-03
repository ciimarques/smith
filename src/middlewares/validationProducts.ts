import { Request, Response, NextFunction } from 'express';

function validateProducts(req: Request, res: Response, next: NextFunction): void {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }
  
  if (typeof name !== 'string') {
    res.status(422).json({ message: '"name" must be a string' });
    return;
  }

  if (name.length < 3) {
    res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    return;
  }

  next();
}

export default validateProducts;

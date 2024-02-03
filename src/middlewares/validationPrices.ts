import { Request, Response, NextFunction } from 'express';

function validatePrices(req: Request, res: Response, next: NextFunction): void {
  const { price } = req.body;

  if (!price) {
    res.status(400).json({ message: '"price" is required' });
    return;
  }
  
  if (typeof price !== 'string') {
    res.status(422).json({ message: '"price" must be a string' });
    return;
  }

  if (price.length < 3) {
    res.status(422).json({ message: '"price" length must be at least 3 characters long' });
    return;
  }

  next();
}

export default validatePrices;

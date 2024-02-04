import { Request, Response } from 'express';
import userService from '../service/user.service';

async function userLogin(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  try {
    const token = await userService.login(username, password);
    res.status(200).json({ token });
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(401).json({ message });
  }
}

export default {
  userLogin,
};

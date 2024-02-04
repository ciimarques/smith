import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

const { JWT_SECRET } = process.env; 

async function login(username: string, password: string): Promise<string> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user) throw new Error('Username or password invalid');
  const match = await bcrypt.compare(password, user.dataValues.password);
  if (!match) {
    throw new Error('Username or password invalid');
  }
  const token = jwt.sign(
    {
      id: user.dataValues.id,
      username,
      password,
    },
    JWT_SECRET as string,
  );
  return token;
}

export default {
  login,
};

import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import userService from '../../../src/service/user.service'
import * as bcrypt from 'bcryptjs'


describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
 
  it('deve retornar o token', async function () {
   const user =
    {
      username: 'Hagar',
      password: bcrypt.hashSync('terrível'),
    };
    
   
    sinon.stub(UserModel, 'findOne').resolves({ dataValues: user } as any);
   
    const token = await userService.login(user.username, 'terrível');

    expect(token).to.be.not.undefined

    
  })
});

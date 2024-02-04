import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import userService from '../../../src/service/user.service';
import userController from '../../../src/controller/userController'
import { username } from '../../../src/database/config/database';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = { body:  {}}  as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('deve responder com status 401 quando userLogin lança um erro', async function () {
    
    sinon.stub(userService, 'login').rejects(new Error('Erro de teste'));

    await userController.userLogin(req as Request, res as Response);

    expect(res.status).to.have.been.calledOnceWith(401);
  
    
  });
});

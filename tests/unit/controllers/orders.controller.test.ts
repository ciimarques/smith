import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import orderService from '../../../src/service/order.service';
import orderController from '../../../src/controller/orderController'
import OrderModel from '../../../src/database/models/order.model';


chai.use(sinonChai);

describe('OrdersController', function () {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(function () {
    sinon.restore();
    req = { body:  {}} as Request;
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
    };
  });
  afterEach(function () {
    sinon.restore(); 
  });

  it('deve responder com status 200 e uma lista de pedidos quando getOrderWithProducts for bem-sucedido', async function () {
    const mockedOrders = [{ id: 1, userId: 1, productIds: [1, 2] }];
    sinon.stub(orderService, 'getOrderWithProducts').resolves(mockedOrders);

    await orderController.getProductWithOrder(req as Request, res as Response);

    expect(res.status).to.have.been.calledOnceWith(200);
    expect(res.json).to.have.been.calledOnceWith(mockedOrders);
  });

  it('deve responder com status 500 quando getOrderWithProducts lança um erro', async function () {
    sinon.stub(orderService, 'getOrderWithProducts').rejects(new Error('Erro de teste'));

    await orderController.getProductWithOrder(req as Request, res as Response);

    expect(res.status).to.have.been.calledOnceWith(500);
  
    expect(res.send).to.have.been.calledOnceWith('Ocorreu um erro ao processar sua solicitação');
  });

  it('deve responder com status 404 quando createOrder lança um erro', async function () {
    sinon.stub(orderService, 'orderCreate').rejects(new Error('Erro de teste'));

    await orderController.createOrder(req as Request, res as Response);

    expect(res.status).to.have.been.calledOnceWith(404);
  
  });

  it('deve responder com status 200 e uma nova order quando createOrder for bem-sucedido', async function () {
    const mockedOrders = [{ userId: 1, productIds: [1, 2] }];
    sinon.stub(orderService, 'orderCreate').resolves(mockedOrders);

    await orderController.createOrder(req as Request, res as Response);

    expect(res.status).to.have.been.calledOnceWith(201);
    expect(res.json).to.have.been.calledOnceWith(mockedOrders);
  });
});

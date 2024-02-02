import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/service/product.service';
import productController from '../../../src/controller/productController'



chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;


  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('createProduct deve criar um produto com sucesso', async function () {
    req.body= {
      name: 'Excalibur',
      price: '10 peças de ouro',
      orderId: 1,
    };

    const product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };
    sinon.stub(productService, 'createProduct').resolves(product);

    await productController.productCreate(req as Request, res as Response);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(product);
  });

});

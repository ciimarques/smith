import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productController  from '../../../src/controller/productController'; 
import productService from '../../../src/service/product.service';

chai.use(sinonChai);

describe('ProductsController', function () {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(function () {
    req = {
      body: {
        name: 'Excalibur',
        price: '10 peças de ouro',
        orderId: 1,
      }
    };
    
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis()
    };

    sinon.restore();
  });

  it('createProduct deve criar um produto com sucesso', async function () {
    
    sinon.stub(productService, 'createProduct').resolves({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    });

    await productController.productCreate(req as Request, res as Response);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({
      id:req.body.id,
      name: req.body.name,
      price: req.body.price,
    });
  });

});

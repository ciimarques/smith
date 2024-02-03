import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import productService from '../../../src/service/product.service';
import ProductModel from '../../../src/database/models/product.model';
import OrderModel from '../../../src/database/models/order.model';
import { ProductRequest, } from '../../../src/types/Product';


chai.use(sinonChai);

describe('ProductsService', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('createProduct deve criar um produto com sucesso', async function () {
    const productDataRequeste: ProductRequest = {
      name: 'Excalibur',
      price: '10 peças de ouro',
      orderId: 4,
    };

    sinon.stub(ProductModel, 'create').resolves({dataValues: {id: 4}} as any)
  
    const result = await productService.createProduct(productDataRequeste);

    expect(result.id).to.be.equal(4);
    expect(result.name).to.be.equal(productDataRequeste.name);
    expect(result.price).to.be.equal(productDataRequeste.price);
  });

  it('createProduct deve mostrar o erro se já existir order', async function () {
    const productDataRequeste: ProductRequest = {
      name: 'Excalibur',
      price: '10 peças de ouro',
      orderId: 1,
    };

    sinon.stub(OrderModel, 'findByPk').resolves({} as any);
    try{
       await productService.createProduct(productDataRequeste);

      expect.fail('função createProduct deveria lançar um error')

    } catch (error) {
      const err = error as Error;

      expect(err.message).to.be.equal('já existe order');
    }
  })
  it('deve retornar todos os produtos com sucesso', async function () {
   
    const products = [
      {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "orderId": 1
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "orderId": 1
      },
    ];
    sinon.stub(productService, 'productGetAll').resolves(products as any);

    const result = await productService.productGetAll()

    expect(result).to.deep.equal(products)
  });
});

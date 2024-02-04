import { expect } from 'chai';
import sinon from 'sinon';
import OrdersService from '../../../src/service/order.service';
import OrderModel from '../../../src/database/models/order.model';
import UserModel from '../../../src/database/models/user.model';

describe('OrdersService', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('deve retornar uma lista de pedidos com IDs de produtos', async function () {
    
    const mockedOrders = [
      {
        id: 1,
        userId: 101,
        productId: [
          { id: 201 },
          { id: 202 },
        ],
      },
      {
        id: 2,
        userId: 102,
        productId: [
          { id: 203 },
        ],
      },
    ];

    sinon.stub(OrderModel, 'findAll').resolves(mockedOrders as any);

    const orders = await OrdersService.getOrderWithProducts();

    expect(orders).to.be.an('array').that.has.lengthOf(2);
    expect(orders[0].id).to.equal(1);
    expect(orders[0].userId).to.equal(101);
    expect(orders[1].id).to.equal(2);
    expect(orders[1].userId).to.equal(102);
  });

  it('deve criar uma order com sucesso', async function() {
  
    const mockedOrders = 
      {
        userId: 4,
        productIds: [201, 202],
      }
    sinon.stub(UserModel, 'findByPk').resolves({dataValues: { id: 4}} as any);
    sinon.stub(OrderModel, 'create').resolves({dataValues: { id: 2 }} as any);
    const orders = await OrdersService.orderCreate(mockedOrders.userId, mockedOrders.productIds);

    expect(orders).to.be.deep.equal(mockedOrders)

  })
  it('orderCreate deve mostrar o erro se não já existir usuário', async function () {
  
    sinon.stub(UserModel, 'findByPk').resolves(undefined);
    try{
       await OrdersService.orderCreate(1,[201, 202]);

      expect.fail('função orderCreate deveria lançar um error')

    } catch (error) {
      const err = error as Error;

      expect(err.message).to.be.equal('"userId" not found');
    }
  })
});


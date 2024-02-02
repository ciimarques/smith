// mocks/productMocks.ts

import { Product } from '../../src/types/Product' 

const productEx: Product = {
  
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1,
  }

const productEx2: Product = {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    orderId: 1,
  }
 

export default {
  productEx,
  productEx2,
};

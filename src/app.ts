import express from 'express';
import productController from './controller/productController';
import orderController from './controller/orderController';

const app = express();

app.use(express.json());
app.post('/products', productController.productCreate);
app.get('/products', productController.getAllProduct);
app.get('/orders', orderController.getProductWithOrder);

export default app;

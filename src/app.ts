import express from 'express';
import productController from './controller/productController';
import orderController from './controller/orderController';
import validateProducts from './middlewares/validationProducts';
import validatePrices from './middlewares/validationPrices';

const app = express();

app.use(express.json());
app.post('/products', validateProducts, validatePrices, productController.productCreate);
app.get('/products', productController.getAllProduct);
app.get('/orders', orderController.getProductWithOrder);

export default app;

import express from 'express';
import productController from './controller/productController';
import orderController from './controller/orderController';
import validateProducts from './middlewares/validationProducts';
import validatePrices from './middlewares/validationPrices';
import validateLogin from './middlewares/validationLogin';
import userController from './controller/userController';

const app = express();

app.use(express.json());
app.post('/products', validateProducts, validatePrices, productController.productCreate);
app.post('/login', validateLogin, userController.userLogin);
app.get('/products', productController.getAllProduct);
app.get('/orders', orderController.getProductWithOrder);

export default app;

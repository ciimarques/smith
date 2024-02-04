import express from 'express';
import productController from './controller/productController';
import orderController from './controller/orderController';
import validateProducts from './middlewares/validationProducts';
import validatePrices from './middlewares/validationPrices';
import validateLogin from './middlewares/validationLogin';
import userController from './controller/userController';
import validateToken from './middlewares/validationToken';
import validateOrder from './middlewares/validationOrder';

const app = express();

app.use(express.json());
app.post('/products', validateProducts, validatePrices, productController.productCreate);
app.post('/login', validateLogin, userController.userLogin);
app.post('/orders', validateToken, validateOrder, orderController.createOrder);
app.get('/products', productController.getAllProduct);
app.get('/orders', orderController.getProductWithOrder);

export default app;

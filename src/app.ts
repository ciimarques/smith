import express from 'express';
import productController from './controller/productController';

const app = express();

app.use(express.json());
app.post('/products', productController.productCreate);
app.get('/products', productController.getAllProduct);

export default app;

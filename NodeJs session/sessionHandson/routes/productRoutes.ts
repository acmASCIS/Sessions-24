import { addProductController, getProductsController } from "../controllers/productController";


const Router = require('express').Router;
const ProductRoutes = Router(); 

ProductRoutes.get('/', getProductsController);
ProductRoutes.post('/',addProductController);

export default ProductRoutes;
import { Request, Response } from "express"
import { addProducts, getProducts } from "../services/productService"
import { productType } from "../types/productType";

const getProductsController = (req:Request, res:Response) =>{
       const products =  getProducts()
       res.status(200).json({Message:"Success", Data:products});
}

const addProductController = (req:Request, res:Response) => {
    const product = req.body as productType;

    addProducts(product)
    res.status(201).json({Message:"la"});
}

export {getProductsController, addProductController}
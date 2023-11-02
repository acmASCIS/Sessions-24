import { productType } from "../types/productType";

let products = [
    {
        name:"aihaga",
        price:200
    },
    {
        name:"aihaga",
        price:200
    },
    {
        name:"aihaga",
        price:300
    },
    {
        name:"aihaga",
        price:350
    },
]

const getProducts= () => {

    return products;
}

const addProducts = (product:productType) =>{
    products.push(product);
}

export {getProducts,addProducts}
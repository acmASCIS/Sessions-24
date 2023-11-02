
const mockProducts = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 25 },
];

function getProductsResolved() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000);
  });
}

async function getProductsAsync() {
  try {
    const products = await getProductsResolved();
    console.log('Promise has to be resolved before going on ', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error; // 
  }
}


async function getProductsAsyncWithNoAwait() {
  try {
    const products =  getProductsResolved();
    console.log('Promise is pending:No data reterived yet but code still executed ', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error; // Rethrow to pass to controller for example
  }
}
getProductsAsync(); 
getProductsAsyncWithNoAwait();
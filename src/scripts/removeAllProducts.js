import writeProduct from '../utils/writeProducts.js';

async function removeAllProducts() {
  await writeProduct([]);
}

removeAllProducts();

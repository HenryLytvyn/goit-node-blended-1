import { createFakeProduct } from '../utils/createFakeProducts.js';
import readProducts from '../utils/readProducts.js';
import writeProduct from '../utils/writeProducts.js';

async function generateProduct(quantity) {
  const arrData = await readProducts();

  for (let i = 0; i < quantity; i++) {
    arrData.push(createFakeProduct());
  }

  writeProduct(arrData);
}

generateProduct(20);

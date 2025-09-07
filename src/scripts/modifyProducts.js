import readProducts from '../utils/readProducts.js';
import writeProduct from '../utils/writeProducts.js';

async function modifyProducts() {
  const arrData = await readProducts();
  arrData.forEach((item) => delete item.description);
  writeProduct(arrData);
}

modifyProducts();

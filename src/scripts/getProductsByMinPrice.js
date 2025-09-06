import readProducts from '../utils/readProducts.js';

async function getProductsByMinPrice(sortPrice) {
  const arrData = await readProducts();
  const data = arrData.filter(({ price }) => parseFloat(price) >= sortPrice);
  console.table(data);
  return data;
}

getProductsByMinPrice(500);

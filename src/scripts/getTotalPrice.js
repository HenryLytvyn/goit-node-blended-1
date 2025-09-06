import readProducts from '../utils/readProducts.js';

async function getTotalPrice() {
  const arrData = await readProducts();
  const totalPrice = arrData.reduce(
    (acc, { price }) => parseFloat(price) + acc,
    0,
  );

  console.log(totalPrice);
  return totalPrice;
}

getTotalPrice();

import readProducts from '../utils/readProducts.js';

async function getUniqueCategories() {
  const arrData = await readProducts();
  const uniqueCategoriesArr = [];
  arrData.forEach(({ category }) => {
    if (uniqueCategoriesArr.includes(category)) return;
    uniqueCategoriesArr.push(category);
  });

  return uniqueCategoriesArr;
}

console.log(await getUniqueCategories());

// npm run get-unique-categories

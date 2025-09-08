import readProducts from '../utils/readProducts.js';

async function groupProductsByCategories() {
  const arrData = await readProducts();
  const sortedByCategory = {};

  arrData.forEach(({ category, name }) => {
    sortedByCategory[category] = sortedByCategory[category] || [];
    sortedByCategory[category].push(name);
  });

  console.log(sortedByCategory);
}

groupProductsByCategories();

import { PATH_FILE_DIR } from '../constants/products.js';
import readProducts from '../utils/readProducts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

async function createProductsFiles() {
  const arrData = await readProducts();
  arrData.forEach((item) => {
    const fileTitle = item.name.split(' ').join('-');
    const fileDir = path.join(PATH_FILE_DIR, `${fileTitle}.json`);
    fs.writeFile(fileDir, JSON.stringify(item));
    console.table(fileDir);
  });
}
!createProductsFiles();

import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export default async function writeProduct(data) {
  try {
    fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Write file error occurred: ', err);
  }
}

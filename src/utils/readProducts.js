import fs from 'node:fs/promises';
import PATH_DB from '../constants/products.js';

export default async function readProducts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error of reading file: ', err);
    return [];
  }
}

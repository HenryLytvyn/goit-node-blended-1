import path from 'node:path';

const PATH_DIR = path.join(process.cwd());
export const PATH_DB = path.join(PATH_DIR, 'src', 'db', 'db.json');
export const PATH_FILE_DIR = path.join(PATH_DIR, 'src', 'db', 'files');

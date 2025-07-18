import fs from 'node:fs/promises';

import { PATH_DB } from '../constans/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

console.log('readContacts.js працює!')
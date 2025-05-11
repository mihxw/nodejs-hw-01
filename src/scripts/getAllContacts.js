import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const oldContacts = await readContacts();
    return oldContacts;
  } catch (error) {
    console.log(error.message);
  }
};
console.log('getAllContacts.js працює!');

console.log(await getAllContacts());
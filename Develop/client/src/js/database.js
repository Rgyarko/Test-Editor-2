import { openDB } from 'idb';

// Check for IndexedDB support and set the correct reference
const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Initialize the database
const initdb = async () => {
  await openDB('Di', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('Di')) {
        db.createObjectStore('Di', { keyPath: 'id', autoIncrement: true });
        console.log('Di database created');
      } else {
        console.log('Di database already exists');
      }
    },
  });
};

// Add content to the database
export const putDb = async (content) => {
  console.log('Adding content to the database');

  // Open a connection to the database
  const db = await openDB('Di', 1);
  // Create a new transaction with readwrite access
  const tx = db.transaction('Di', 'readwrite');
  // Get the object store
  const store = tx.objectStore('Di');
  // Add the content to the store
  const result = await store.add({ content });

  console.log('Content saved to the database', result);
};

// Get all content from the database
export const getDb = async () => {
  console.log('Retrieving content from the database');

  // Open a connection to the database
  const db = await openDB('Di', 1);
  // Create a new transaction with readonly access
  const tx = db.transaction('Di', 'readonly');
  // Get the object store
  const store = tx.objectStore('Di');
  // Get all records from the store
  const result = await store.getAll();

  console.log('Retrieved content from the database', result);
  return result;
};

// Initialize the database
initdb();



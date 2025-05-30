import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_DOMINIO.firebaseapp.com',
  projectId: 'TU_PROYECTO_ID'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Persistencia IndexedDB fallida:', err);
});

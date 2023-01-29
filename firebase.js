import firebase from './firebase';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA7TaOsXv-kzxcLasjuqVoah1I8VjBOl_4',
  authDomain: 'yasc-frontend.firebaseapp.com',
  projectId: 'yasc-frontend',
  storageBucket: 'yasc-frontend.appspot.com',
  messagingSenderId: '458400336303',
  appId: '1:458400336303:web:8068fb38b020cce2a7875a',
  measurementId: 'G-E8V6V4R93P',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };

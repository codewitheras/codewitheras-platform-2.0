import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVsbXJVgfW4GmDJrICgJsiKVl3--dKNHY",
  authDomain: "courselab-db.firebaseapp.com",
  projectId: "courselab-db",
  storageBucket: "courselab-db.appspot.com",
  messagingSenderId: "480384435172",
  appId: "1:480384435172:web:c3f4b71051fc14fe3dbdf1",
  measurementId: "G-YHFDX2BE8N",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
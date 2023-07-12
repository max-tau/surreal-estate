import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCebUrN9SpoGLxWFkPa89a9uFPj3GnIHNI",
  authDomain: "surreal-estate-4d38c.firebaseapp.com",
  projectId: "surreal-estate-4d38c",
  storageBucket: "surreal-estate-4d38c.appspot.com",
  messagingSenderId: "933650548749",
  appId: "1:933650548749:web:93909c8d6713b8b0dced44",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

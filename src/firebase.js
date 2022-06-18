import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPW4KfEZ6I9RVrC_cT7pvObHZr3px_I-8",
  authDomain: "dummy-linkedin-clone-fa74e.firebaseapp.com",
  projectId: "dummy-linkedin-clone-fa74e",
  storageBucket: "dummy-linkedin-clone-fa74e.appspot.com",
  messagingSenderId: "9047111303",
  appId: "1:9047111303:web:e913473d2ffef3b1b86a22",
  measurementId: "G-6XZ5KWJ04Y",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;

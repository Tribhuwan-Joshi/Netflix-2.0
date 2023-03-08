import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASnkcGVWVOBCA9kxgSMRDvaQWk9QYzbqY",
  authDomain: "netflix-a53c5.firebaseapp.com",
  projectId: "netflix-a53c5",
  storageBucket: "netflix-a53c5.appspot.com",
  messagingSenderId: "1017879375497",
  appId: "1:1017879375497:web:d7c367ceea0348d9df2058",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;

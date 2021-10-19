import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
const FirebaseInit = () => {
  const app = initializeApp(firebaseConfig);
};
export default FirebaseInit;
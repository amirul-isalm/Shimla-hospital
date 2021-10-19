import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
const FirebaseInit = () => {
  return initializeApp(firebaseConfig);
};
export default FirebaseInit;

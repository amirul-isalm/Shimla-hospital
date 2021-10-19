import { useEffect, useState } from "react";
import FirebaseInit from "./Firebase.init";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  // Google sign in function
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, provider);
  };

  // create password based account
  const createaccountUsingpass = (email, password, name) => {
    setIsLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
      
  };
  //  update user data

  const updateData = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  // login useing email and password

  const loginUserUsingEmailPass = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out function
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // any auth change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    setError,
    setUser,
    error,
    googleSignIn,
    logOut,
    createaccountUsingpass,
    updateData,
    loginUserUsingEmailPass,
    setIsLoading,
    isLoading
    
  };
};

export default useFirebase;

/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.confiq";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loader,
    googleSignIn,
    githubSignIn,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

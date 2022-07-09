import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: 'Eras',
  register: () => Promise,
  login: () => Promise,
  loginWithGoogle: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Register User
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login User
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Login User with Google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Send User reset password email
  const forgotPassword = email => {
    return sendPasswordResetEmail(auth, email, {
      url: "http:localhost:3000/login",
    });
  };

  // Logout the User
  const logout = () => signOut(auth);

  // Checking is our Application has a user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    register,
    login,
    loginWithGoogle,
    logout,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

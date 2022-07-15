import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

// Updated the Config
const firebaseConfig = {
  apiKey: "AIzaSyDg44ztuhLsOwwDXfGAXQrCVAliS6u-Bk0",
  authDomain: "codewitheras-platform.firebaseapp.com",
  projectId: "codewitheras-platform",
  storageBucket: "codewitheras-platform.appspot.com",
  messagingSenderId: "910632721930",
  appId: "1:910632721930:web:d29e7db2a09826483489f3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Passwordless Sign In

/*

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

*/
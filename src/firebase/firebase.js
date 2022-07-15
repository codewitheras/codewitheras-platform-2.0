import { initializeApp } from 'firebase/app'
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink } from 'firebase/auth';

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

// Send user a passwordless email and verification

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


// Confirm the link is a sign-in with email link.
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
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


// Completing sign-in in a web page

// To complete the sign in on landing page, call signInWithEmailLink with the user's email 
// and the actual email link containing the one-time code


/*

// Confirm the link is a sign-in with email link.
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

*/
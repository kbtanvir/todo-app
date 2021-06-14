import firebase from "firebase/app";
import "firebase/auth";
export const provider = new firebase.auth.GoogleAuthProvider();

const config = firebase.initializeApp({
  apiKey: "AIzaSyCJMpny2WihhUMYHBW7YRpE95kRKXsi6XU",
  authDomain: "oporup-fasion-app.firebaseapp.com",
  databaseURL: "https://oporup-fasion-app.firebaseio.com",
  projectId: "oporup-fasion-app",
  storageBucket: "oporup-fasion-app.appspot.com",
  messagingSenderId: "7536098041",
  appId: "1:7536098041:web:249f1198b39d8319208028",
});

export const auth = config.auth();

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

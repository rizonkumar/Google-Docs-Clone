import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDg82oGv9Yklgx12jaoEr1OtlkuT7c64R0",
  authDomain: "docs-e2ea7.firebaseapp.com",
  projectId: "docs-e2ea7",
  storageBucket: "docs-e2ea7.appspot.com",
  messagingSenderId: "149307710963",
  appId: "1:149307710963:web:1e61f8b9208f3deb724686",
  measurementId: "G-N169TK9VBT",
};


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
  firebase.app();

  const db = app.firestore();

  export {db};
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpDyRafB2XixBwimvRN-DGL_AMV1XjLI0",
    authDomain: "amzon-vb.firebaseapp.com",
    projectId: "amzon-vb",
    storageBucket: "amzon-vb.appspot.com",
    messagingSenderId: "53541335717",
    appId: "1:53541335717:web:971f02fb21a77675a7934c"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();
  export default db;
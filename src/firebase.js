import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCW4gL7dTE069jbNUnOmveztG7jXGxfncA",
    authDomain: "reactnative-ec59f.firebaseapp.com",
    projectId: "reactnative-ec59f",
    storageBucket: "reactnative-ec59f.appspot.com",
    messagingSenderId: "512226892289",
    appId: "1:512226892289:web:d2746196d4562859b6be00"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
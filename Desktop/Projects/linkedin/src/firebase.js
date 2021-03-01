import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNY9n9Sm8YwIC_oQxHIGXa7XGotiJoGtY",
  authDomain: "linkedin-clone-c4895.firebaseapp.com",
  projectId: "linkedin-clone-c4895",
  storageBucket: "linkedin-clone-c4895.appspot.com",
  messagingSenderId: "168102969676",
  appId: "1:168102969676:web:ad79c43beaed2168ed4fe9",
  measurementId: "G-62EW8ZB0L9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
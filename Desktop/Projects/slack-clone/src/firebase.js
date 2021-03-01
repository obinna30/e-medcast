// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB58G8Ohsbkl4uoCVPnTqtTQ93HrwR5Nkk",
  authDomain: "e-medcast.firebaseapp.com",
  projectId: "e-medcast",
  storageBucket: "e-medcast.appspot.com",
  messagingSenderId: "554632790322",
  appId: "1:554632790322:web:b80cd2880f431fabc7572b",
  measurementId: "G-W09D9C11TS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;
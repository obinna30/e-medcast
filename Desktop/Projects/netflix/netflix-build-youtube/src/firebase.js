import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBli6J5V_TwoFa8khwdOkolU8xQKnptX1M",
  authDomain: "netflix-clone-6dc45.firebaseapp.com",
  projectId: "netflix-clone-6dc45",
  storageBucket: "netflix-clone-6dc45.appspot.com",
  messagingSenderId: "485749207168",
  appId: "1:485749207168:web:af759cb1d87faa3ad17665",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

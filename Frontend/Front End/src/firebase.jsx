// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBQvRgcRW8_VbNEvRpgiEePehLBJ8giFfk",
    authDomain: "watch-registrationform.firebaseapp.com",
    databaseURL: "https://watch-registrationform-default-rtdb.firebaseio.com",
    projectId: "watch-registrationform",
    storageBucket: "watch-registrationform.appspot.com",
    messagingSenderId: "967025713356",
    appId: "1:967025713356:web:8e41e8128d11287f25a269",
    measurementId: "G-C0MEE73YQF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
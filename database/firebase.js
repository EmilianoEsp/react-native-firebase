import firebase from 'firebase';

import 'firebase/firestore';

//import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDqpWAFPmb169Q0ow06Z1E1bXlQRZmGDrw",
  authDomain: "app-tesis-993b4.firebaseapp.com",
  projectId: "app-tesis-993b4",
  storageBucket: "app-tesis-993b4.appspot.com",
  messagingSenderId: "564107238685",
  appId: "1:564107238685:web:53e831e69fc02ea8ea15f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
// Import the functions you need from the SDKs you need

import "firebase/auth"
import "firebase/database"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvcxzwEiBwBNIhVNMnxuaZksRlrbt_no",
  authDomain: "kifee-test.firebaseapp.com",
  projectId: "kifee-test",
  storageBucket: "kifee-test.appspot.com",
  messagingSenderId: "368891039577",
  appId: "1:368891039577:web:0926423989ccfd0d5b8648",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export { db }

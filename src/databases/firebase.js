import firebase from 'firebase';
import React from "react";
const config = {
    apiKey: "AIzaSyBhZCsg3iKlhJFc5mncgKq0oC2gccl4iw8",
    authDomain: "exwed-25c42.firebaseapp.com",
    databaseURL: "https://exwed-25c42.firebaseio.com",
    projectId: "exwed-25c42",
    storageBucket: "exwed-25c42.appspot.com",
    messagingSenderId: "579080296220",
    appId: "1:579080296220:web:415a9ecbfebf5ae0"
  };
  firebase.initializeApp(config);
  export const database=firebase.database().ref('/');
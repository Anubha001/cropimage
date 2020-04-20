import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-M8X_8JB1h5h690Ltblhp360-J3CHzqM",
  authDomain: "revents-fdd2c.firebaseapp.com",
  databaseURL: "https://revents-fdd2c.firebaseio.com",
  projectId: "revents-fdd2c",
  storageBucket: "revents-fdd2c.appspot.com",
  messagingSenderId: "727268563237",
  appId: "1:727268563237:web:07b46a66c30dbd661da2cc",
  measurementId: "G-DHGSXY0WJE"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}

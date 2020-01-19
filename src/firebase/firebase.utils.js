import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkQOAX-8B5b_JgLB6j8aUKWJtP7rarDMc",
  authDomain: "egg-plant-aff33.firebaseapp.com",
  databaseURL: "https://egg-plant-aff33.firebaseio.com",
  projectId: "egg-plant-aff33",
  storageBucket: "egg-plant-aff33.appspot.com",
  messagingSenderId: "678753341494",
  appId: "1:678753341494:web:3cdb7891aec5d48a1e4897",
  measurementId: "G-N8M9DMEBGR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUbmWGCvQchiXi83bNEGrEe1F9cl66Nnc",
  authDomain: "clone-f1c74.firebaseapp.com",
  projectId: "clone-f1c74",
  storageBucket: "clone-f1c74.appspot.com",
  messagingSenderId: "245518235460",
  appId: "1:245518235460:web:a96bde10613d5e741cc911",
  measurementId: "G-LN3HCQHH3D"
});

const db = firebase.firestore();

export { db };

// whenever you install something via npm it gets installed in node_modules


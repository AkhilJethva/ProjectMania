import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAd9-LNFWrBHu3gNnlX39A-4qzIaL8va8",
    authDomain: "project-mania-cfd69.firebaseapp.com",
    databaseURL: "https://project-mania-cfd69.firebaseio.com",
    projectId: "project-mania-cfd69",
    storageBucket: "project-mania-cfd69.appspot.com",
    messagingSenderId: "451039869638",
    appId: "1:451039869638:web:fbe17df7fb6f84ac0eb5c7",
    measurementId: "G-96K8HMPGDV"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
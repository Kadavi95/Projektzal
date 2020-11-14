import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwPz5GnpcyAU9v25z2HnhqoU0HZNEsD8U",
    authDomain: "projekt-zal.firebaseapp.com",
    databaseURL: "https://projekt-zal.firebaseio.com",
    projectId: "projekt-zal",
    storageBucket: "projekt-zal.appspot.com",
    messagingSenderId: "747093087109",
    appId: "1:747093087109:web:023e9bb5e82f31e24e6aec",
    measurementId: "G-HXXBVJ3Z07"
  };
  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore()
  

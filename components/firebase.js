import  firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAn7U65zKQZGNYAFnWHPZPK1dTXikf-Gsc",
    authDomain: "dillali-6eb08.firebaseapp.com",
    projectId: "dillali-6eb08",
    storageBucket: "dillali-6eb08.appspot.com",
    messagingSenderId: "679175827467",
    appId: "1:679175827467:web:d93d40f7edcd0bfc59170e"
  };
  // Initialize Firebase

 
 export default !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
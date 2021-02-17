import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAn7U65zKQZGNYAFnWHPZPK1dTXikf-Gsc",
    authDomain: "dillali-6eb08.firebaseapp.com",
    projectId: "dillali-6eb08",
    storageBucket: "dillali-6eb08.appspot.com",
    messagingSenderId: "679175827467",
    appId: "1:679175827467:web:d93d40f7edcd0bfc59170e"
  };
  // Initialize Firebase

 const firebaseDb=firebase.initializeApp(firebaseConfig);
 export default firebaseDb.database().ref();
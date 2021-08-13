import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    // Firebase credentials;
    
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  
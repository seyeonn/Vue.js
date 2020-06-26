import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDOLDg5pNeTO_Te3F3bSNbvHL7-175gqDs",
    authDomain: "skhu-asy.firebaseapp.com",
    databaseURL: "https://skhu-asy.firebaseio.com",
    projectId: "skhu-asy",
    storageBucket: "skhu-asy.appspot.com",
    messagingSenderId: "761740859513",
    appId: "1:761740859513:web:913f009f4ce0ec8e01dca8",
    measurementId: "G-HZZMQQH172"
  };
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;

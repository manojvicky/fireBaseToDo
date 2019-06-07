import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCEJ3xJO86vcHTtWZL6XllUUCWmb503Pi0",
    authDomain: "webdemo-yoo.firebaseapp.com",
    databaseURL: "https://webdemo-yoo.firebaseio.com",
    projectId: "webdemo-yoo",
    storageBucket: "webdemo-yoo.appspot.com",
    messagingSenderId: "224219806159",
    appId: "1:224219806159:web:8fa392b11a82c9b6"
  };

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
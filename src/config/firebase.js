  import firebase from "firebase/app";
  import "firebase/database";

//   Setting our firebase configurations

  const firebaseConfig = {
    apiKey: "AIzaSyDvZDmXdyInQv0DRes9s_XcZ9rcrUcQ53s",
    authDomain: "joke-book-8d1f8.firebaseapp.com",
    databaseURL: "https://joke-book-8d1f8-default-rtdb.firebaseio.com",
    projectId: "joke-book-8d1f8",
    storageBucket: "joke-book-8d1f8.appspot.com",
    messagingSenderId: "201485015479",
    appId: "1:201485015479:web:218763eaccf561b2e23032",
    measurementId: "G-ZW29NGC1MH"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;

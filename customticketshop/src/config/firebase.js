import firebase from 'firebase';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDm_DOFX1GJTOhnWAL6Dl8ITall41fb828",
        authDomain: "customticketshop.firebaseapp.com",
        databaseURL: "https://customticketshop.firebaseio.com",
        projectId: "customticketshop",
        storageBucket: "customticketshop.appspot.com",
        messagingSenderId: "617857123772"
      };
      const fire = firebase.initializeApp(config);
  
  export default fire;
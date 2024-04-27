const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyDaWHKw97ue_C6PhNuHlIOjNTC3rlaPeQ8",
    authDomain: "messa-a27d9.firebaseapp.com",
    projectId: "messa-a27d9",
    storageBucket: "messa-a27d9.appspot.com",
    messagingSenderId: "291151785629",
    appId: "1:291151785629:web:9fb2f3aa097082db6f2e74",
    measurementId: "G-HSFBJRJFT6"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
    //subscribeTokenToTopic(token, "allUsers");
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("Unable to get permission to notify", err);
  });

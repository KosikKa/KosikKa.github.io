importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");
//
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

messaging.setBackgroundMessageHandler(payload => {
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
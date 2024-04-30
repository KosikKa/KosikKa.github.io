importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js");

//
const config = {
    apiKey: "AIzaSyCtgaF_YzSrYXSOWIlS4qQPO3sIGwF0Gic",
    authDomain: "maska-c8ab8.firebaseapp.com",
    projectId: "maska-c8ab8",
    storageBucket: "maska-c8ab8.appspot.com",
    messagingSenderId: "183357275456",
    appId: "1:183357275456:web:437c4fb81a04c168ddcea5",
    measurementId: "G-9C7JF4Z33J"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload)=>{
    console.log('Получено уведомление:', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon ?? null
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
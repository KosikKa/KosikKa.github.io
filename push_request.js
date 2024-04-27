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


document.getElementById("notification_subscribe").addEventListener("click",async () => {

    await Notification.requestPermission();

    if (Notification.permission === 'granted'){
        await messaging.requestPermission();
        const res = await navigator.permissions.query({ name: 'clipboard-write' });

        if(res.state === "granted"){
            await navigator.clipboard.writeText(await messaging.getToken());
        }
    }
});


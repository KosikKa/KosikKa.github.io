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

// Добавление этого кода
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log('Current token: ', currentToken);
    document.getElementById("user_token").textContent = `Ваш токен: ${currentToken}`;
  } else {
    console.log('No token available.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token: ', err);
});
// Конец добавления

document.getElementById("notification_subscribe").addEventListener("click", async () => {

    await Notification.requestPermission();

    if (Notification.permission === 'granted') {
        await messaging.requestPermission();
        const res = await navigator.permissions.query({ name: 'clipboard-write' });

        if (res.state === "granted") {
            const token = await messaging.getToken();
            await navigator.clipboard.writeText(token);
            document.getElementById("user_token").textContent = `Ваш токен: ${token}`;
        }
    }
});

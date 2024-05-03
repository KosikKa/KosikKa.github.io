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

document.addEventListener("DOMContentLoaded", async () => {
  if (Notification.permission !== 'granted') {
    messaging.requestPermission()
      .then(() => {
        console.log('Разрешение на уведомления предоставлено.');
        fetchAndDisplayToken();
      })
      .catch((error) => {
        console.error('Не удалось получить разрешение на уведомления.', error);
      });
  } else {
    fetchAndDisplayToken();
  }
});

messaging.onTokenRefresh(() => {
  fetchAndDisplayToken();
});

document.getElementById("notification_subscribe").addEventListener("click", async () => {
  if (Notification.permission === 'granted') {
    await messaging.requestPermission();
    const res = await navigator.permissions.query({ name: 'clipboard-write' });

    if (res.state === "granted") {
      try {
        const token = await messaging.getToken();
        await navigator.clipboard.writeText(token);
        document.getElementById("user_token").textContent = `Ваш токен: ${token}`;
      } catch (error) {
        console.error('Ошибка при получении токена: ', error);
      }
    }
  } else {
    console.log('Уведомления не разрешены.');
  }
});

async function fetchAndDisplayToken() {
  try {
    const token = await messaging.getToken();
    document.getElementById("user_token").textContent = `Ваш токен: ${token}`;
  } catch (error) {
    console.error('Ошибка при получении токена: ', error);
  }
}

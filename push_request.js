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

// Запрашиваем разрешение на получение уведомлений при загрузке страницы
messaging.requestPermission()
.then(() => {
  console.log('Разрешение на уведомления предоставлено.');
  getToken();
})
.catch((error) => {
  console.error('Не удалось получить разрешение на уведомления.', error);
});

// Функция для получения токена устройства
function getToken() {
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log('Токен получен:', currentToken);
    document.getElementById('user_token').textContent = currentToken;
  } else {
    console.log('Не удалось получить токен. Пользователь отклонил разрешение на уведомления.');
  }
}).catch((error) => {
  console.error('Ошибка при получении токена: ', error);
});
}

// Обработчик события нажатия на кнопку "Подписаться на уведомления"
document.getElementById("notification_subscribe").addEventListener("click", async () => {
try {
  const token = await messaging.getToken();
  await navigator.clipboard.writeText(token);
  console.log('Токен скопирован в буфер обмена:', token);
} catch (error) {
  console.error('Ошибка при копировании токена в буфер обмена:', error);
}
});

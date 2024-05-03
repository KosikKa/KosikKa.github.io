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

// Удалить слушатель события кнопки
// document.getElementById("notification_subscribe").removeEventListener("click", async () => { ... });

// Получить токен при загрузке страницы
await messaging.requestPermission();
const token = await messaging.getToken();
console.log("Полученный токен:", token);

// Отобразить токен
const tokenDisplayElement = document.getElementById("token-display");
tokenDisplayElement.textContent = "Ваш токен: " + token;

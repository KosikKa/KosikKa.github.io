// Инициализация OneSignal SDK
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "0036313c-0523-4f29-920f-6788372b9991",
    autoRegister: false,
    welcomeNotification: {
      title: "Welcome!",
      message: "Thanks for subscribing to our push notifications!"
    }
  });

  // Получение токена устройства
  OneSignal.getUserId(function(userId) {
    // Сохранение токена в локальном хранилище
    localStorage.setItem('onesignal_token', userId);
  });

  // Обработчик события для кнопки подписки на push-уведомления
  document.getElementById("notification_subscribe").addEventListener("click", function() {
    OneSignal.push(function() {
      OneSignal.registerForPushNotifications();
    });
  });
});

// Получение токена из локального хранилища
const onesignalToken = localStorage.getItem('onesignal_token');
if (onesignalToken) {
  // Вывод токена на экран
  document.getElementById("user_token").textContent = onesignalToken;
}

// Регистрация сервис-воркера OneSignal
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/OneSignalSDKWorker.js');
}

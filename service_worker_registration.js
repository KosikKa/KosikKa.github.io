document.addEventListener("load",()=>{
  navigator?.serviceWorker.getRegistrations().then(registrations => {
    let isServiceWorkerRegistered = false;
    let isFirebaseWorkerRegistered = false;
    registrations.forEach(registration => {
        if (registration.active && registration.active.scriptURL === 'https://crosby-titan.github.io/service-worker.js') {
            isServiceWorkerRegistered = true;
        }
        if(registration.active && registration.active.scriptURL === 'https://crosby-titan.github.io/firebase-messaging-sw.js'){
          isFirebaseWorkerRegistered = true;
        }
    });
    if (!isServiceWorkerRegistered) {
        navigator?.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then(() => {
          console.log('Service worker зарегистрирован.');
        })
        .catch((error) => {
          console.error('Ошибка регистрации Service worker:', error);
        });
    }
    if(!isFirebaseWorkerRegistered){
      
      navigator?.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/' })
      .then(() => {
          console.log('Service Worker для Firebase Messaging зарегистрирован');
      })
      .catch((error) => {
          console.error('Ошибка регистрации Service Worker для Firebase Messaging:', error);
      });
    }
  }).catch(error => {
    console.error('Ошибка при проверке дублирования Service Worker', error);
  });
});
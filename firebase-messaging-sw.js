importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");
//
if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const o=e=>r(e,a),c={module:{uri:a},exports:s,require:o};i[a]=Promise.all(d.map((e=>c[e]||o(e)))).then((e=>(n(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CcVcOG3l.js",revision:null},{url:"assets/index-DfCoYN4f.css",revision:null},{url:"img/android-chrome-192x192.png",revision:"fd527e181d2dafba041fbd450dd32b36"},{url:"img/android-chrome-512x512.png",revision:"abb10733578398d130eab2b56e9167db"},{url:"img/apple-touch-icon.png",revision:"703dfdbb9509c2dea3e8c92aed6be4ee"},{url:"img/cat(1).jpg",revision:"990119558e0a8de9c713783d53144d2a"},{url:"img/cat(2).jpg",revision:"22242f7aee3f230a57d9d678ae004b44"},{url:"img/cat(3).jpg",revision:"20c599b9711309fa5d32505967e6762e"},{url:"img/cat(4).jpg",revision:"a94b463c75e6a8eb011d77fdcd6020c7"},{url:"img/cat(5).jpg",revision:"71472f8b7e0e55b2367e14320967bb21"},{url:"img/cat(6).jpg",revision:"3a865633e55ba5daefa96047ab48f64f"},{url:"img/cat(7).jpg",revision:"9bce3f0428d62032e9674e73b7eb2a87"},{url:"img/cat(8).jpg",revision:"2aa89fa3ecf49b08575c6e696d97f9ea"},{url:"img/cat(9).jpg",revision:"ef48d48e6b1e7d0553f4139dd33c74e1"},{url:"img/favicon-16x16.png",revision:"0d52144d45d060b3fbe7ce0a514790b1"},{url:"img/favicon-32x32.png",revision:"269681ed4b1dfc02d2fa25f168dfc9d9"},{url:"img/mstile-150x150.png",revision:"5eadf9e70c89beb71e8525c3c37e1275"},{url:"img/safari-pinned-tab.svg",revision:"c86b6f2ec7a97867e992560270c18e39"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"img/android-chrome-192x192.png",revision:"fd527e181d2dafba041fbd450dd32b36"},{url:"img/android-chrome-512x512.png",revision:"abb10733578398d130eab2b56e9167db"},{url:"manifest.webmanifest",revision:"491992d0077c3276b679dfef6e45e4ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//
firebase.initializeApp({
  messagingSenderId: "314381446595"
});

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
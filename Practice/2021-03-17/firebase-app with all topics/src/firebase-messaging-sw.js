importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyA9FjP6H0kZ3dhJlC1x2RR8ti-rwHFlUxY",
    authDomain: "angularapp-c267c.firebaseapp.com",
    projectId: "angularapp-c267c",
    storageBucket: "angularapp-c267c.appspot.com",
    messagingSenderId: "831955559790",
    appId: "1:831955559790:web:340eedb4366b5cbd8ecd7f",
    measurementId: "G-R98CBP5404"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


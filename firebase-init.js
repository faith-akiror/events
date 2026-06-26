// PASTE YOUR FIREBASE CONFIGURATION OBJECT HERE
const firebaseConfig = {
    apiKey: "AIzaSyDzAHTQvO40Si4buEVzHG6umqqtkHM5JvI",
    authDomain: "faith-events-co.firebaseapp.com",
    projectId: "faith-events-co",
    storageBucket: "faith-events-co.appspot.com",
    messagingSenderId: "161768227198",
    appId: "1:161768227198:web:546f0485391c4a2c5c732f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

console.log("Firebase initialized successfully!");
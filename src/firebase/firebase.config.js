// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW5fBn3pederLwRIgIkbJdou9yZxfTQ6A",
    authDomain: "the-news-dragon-eeaa4.firebaseapp.com",
    projectId: "the-news-dragon-eeaa4",
    storageBucket: "the-news-dragon-eeaa4.appspot.com",
    messagingSenderId: "1081680134125",
    appId: "1:1081680134125:web:89ff1a1e1e94cfec15f1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
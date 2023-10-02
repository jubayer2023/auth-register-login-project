// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRnxuteNjHT0UnFeDN0wchYsxVjtE8mVo",
    authDomain: "auth-register-login-project.firebaseapp.com",
    projectId: "auth-register-login-project",
    storageBucket: "auth-register-login-project.appspot.com",
    messagingSenderId: "900655948067",
    appId: "1:900655948067:web:daa227d9c5da704a55ac96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCPpr2qtXZTWzxTjYL2_Wuhmr3paIagYA",
  authDomain: "ddnet-e59a3.firebaseapp.com",
  projectId: "ddnet-e59a3",
  storageBucket: "ddnet-e59a3.firebasestorage.app",
  messagingSenderId: "261161650747",
  appId: "1:261161650747:web:def20674be2b15d0186a1e",
  measurementId: "G-FZCWERKNWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function register(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Kayıt başarılı! Hoşgeldin " + userCredential.user.email);
    })
    .catch(error => {
      alert("Hata: " + error.message);
    });
}

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Giriş başarılı! Hoşgeldin " + userCredential.user.email);
    })
    .catch(error => {
      alert("Hata: " + error.message);
    });
}

document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  register(email, password);
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  login(email, password);
});


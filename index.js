js
// Firebase yapılandırması
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

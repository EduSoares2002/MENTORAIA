// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdX0riR89OF-5YZ6BPVpb3huxScTR_kpU",
  authDomain: "mentora-a4473.firebaseapp.com",
  projectId: "mentora-a4473",
  storageBucket: "mentora-a4473.firebasestorage.app",
  messagingSenderId: "892533111186",
  appId: "1:892533111186:web:71006fd70eaac38da0694b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

// ✅ Aqui está a correção:
export { auth, app };

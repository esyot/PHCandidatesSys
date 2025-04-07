import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVpAXWIvjTBBVjOWoCo1rLzrXXnLvODwg",
  authDomain: "ph-candidates-sys.firebaseapp.com",
  projectId: "ph-candidates-sys",
  storageBucket: "ph-candidates-sys.firebasestorage.app",
  messagingSenderId: "399654919750",
  appId: "1:399654919750:web:52d47beccf467bb25c3447",
  measurementId: "G-4YRVEMDDK1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

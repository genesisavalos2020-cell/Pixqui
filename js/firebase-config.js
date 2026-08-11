// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9yD9OWGifsh64O8kgPI_l4Ni98svMFvg",
  authDomain: "pixqui-6ca98.firebaseapp.com",
  projectId: "pixqui-6ca98",
  storageBucket: "pixqui-6ca98.firebasestorage.app",
  messagingSenderId: "936564200131",
  appId: "1:936564200131:web:9dcfbb613b8b73e2850876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
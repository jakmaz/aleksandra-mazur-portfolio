import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBj1k8kXx-K3zdxVJd889uJ3XHn2VwbRaI",
    authDomain: "aleksandra-mazur-portfolio.firebaseapp.com",
    projectId: "aleksandra-mazur-portfolio",
    storageBucket: "aleksandra-mazur-portfolio.appspot.com",
    messagingSenderId: "250087508432",
    appId: "1:250087508432:web:488c17b0006d79607891d5",
    measurementId: "G-8GP791WXL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
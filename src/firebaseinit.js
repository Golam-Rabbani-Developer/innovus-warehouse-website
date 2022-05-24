import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDukNpZMhQZDhuEwuE8Mn51X3uKNApQlfo",
    authDomain: "innovus-9d152.firebaseapp.com",
    projectId: "innovus-9d152",
    storageBucket: "innovus-9d152.appspot.com",
    messagingSenderId: "74421082302",
    appId: "1:74421082302:web:36d2f5e1c6677eaacc66ef"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
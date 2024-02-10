
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA06fhDFW0QaFPfLcP9l9hwPD21EAyDiP4",
  authDomain: "otp-project-ae0ba.firebaseapp.com",
  projectId: "otp-project-ae0ba",
  storageBucket: "otp-project-ae0ba.appspot.com",
  messagingSenderId: "790214075989",
  appId: "1:790214075989:web:eecc8796b376b8610816dc",
  measurementId: "G-101NC2B751"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };

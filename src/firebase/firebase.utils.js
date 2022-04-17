import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//Firebase configuration Variable
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
}


//Initialize Firebase
const app = initializeApp(firebaseConfig);

// //Store Users in database
// export createUserProfileDocument = async () => {

// }











export const auth = getAuth(app);


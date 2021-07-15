// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDQssxSDUSswcgKzjun6iIJglQ3Rugabtc",
//   authDomain: "to-do-react-20629.firebaseapp.com",
//   projectId: "to-do-react-20629",
//   storageBucket: "to-do-react-20629.appspot.com",
//   messagingSenderId: "1057439740543",
//   appId: "1:1057439740543:web:cfb3ef7058ddb7d31cc54a",
//   measurementId: "G-79HX64HFV3"
// };
import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDQssxSDUSswcgKzjun6iIJglQ3Rugabtc",
  authDomain: "to-do-react-20629.firebaseapp.com",
  projectId: "to-do-react-20629",
  storageBucket: "to-do-react-20629.appspot.com",
  messagingSenderId: "1057439740543",
  appId: "1:1057439740543:web:cfb3ef7058ddb7d31cc54a",
  measurementId: "G-79HX64HFV3"
});

const db = firebaseApp.firestore();
export default db;
import firebase from "firebase";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTVI9I7Zuu8tpmVBn2WJFSc_Yfcy-pRRw",
  authDomain: "ggi-waste-tracker.firebaseapp.com",
  databaseURL: "https://ggi-waste-tracker-default-rtdb.firebaseio.com/",
  projectId: "ggi-waste-tracker",
  storageBucket: "ggi-waste-tracker.appspot.com",
  messagingSenderId: "507717334363",
  appId: "1:507717334363:web:55071d532b97ee250dd67e",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}

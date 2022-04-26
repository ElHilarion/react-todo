import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAwmCexPTwPKUnInsF6zdnexU8wYksb_aw",
  authDomain: "nutcracker-todolist.firebaseapp.com",
  databaseURL: "https://nutcracker-todolist-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nutcracker-todolist",
  storageBucket: "nutcracker-todolist.appspot.com",
  messagingSenderId: "725065446678",
  appId: "1:725065446678:web:1e64d3d6837a085bebcc37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
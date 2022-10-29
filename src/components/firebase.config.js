import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAPziCzoJeTbzDENfb6GxT2ZNsdOBqAXRA",
    authDomain: "restaurantapp-94a55.firebaseapp.com",
    databaseURL: "https://restaurantapp-94a55-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-94a55",
    storageBucket: "restaurantapp-94a55.appspot.com",
    messagingSenderId: "449885740144",
    appId: "1:449885740144:web:dac48c4fe65648507de8b5"
  };
  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app)
  export {app, firestore, storage}
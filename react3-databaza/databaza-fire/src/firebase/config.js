import firebase from "firebase/app"
import "firebase/firestore" 

const firebaseConfig = {

    apiKey: "AIzaSyDO4V3ZRtlxbSnB4kdKO0f4SMv2xBgbHzg",

    authDomain: "react-databaza-firebase.firebaseapp.com",

    projectId: "react-databaza-firebase",

    storageBucket: "react-databaza-firebase.appspot.com",

    messagingSenderId: "44996166952",

    appId: "1:44996166952:web:4028480bdadfba1759fc1d"

};

//zakladne nastavenie firebase (INIT)
firebase.initializeApp(firebaseConfig)
//zakladne nastavenie sluzieb
const projectFirestore = firebase.firestore()

export {projectFirestore}
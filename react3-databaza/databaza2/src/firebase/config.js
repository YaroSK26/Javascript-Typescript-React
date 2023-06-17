import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBEwgsL4BpySSJLlo3saVHBThHZO9nEtAY",

    authDomain: "movies-project-2-cf3a4.firebaseapp.com",

    projectId: "movies-project-2-cf3a4",

    storageBucket: "movies-project-2-cf3a4.appspot.com",

    messagingSenderId: "64922757676",

    appId: "1:64922757676:web:a3a26ab2a214e192cdff89"

};

//zakladne nastavenie firebase (INIT)
firebase.initializeApp(firebaseConfig)
//zakladne nastavenie sluzieb
const projectFirestore = firebase.firestore()


export default projectFirestore
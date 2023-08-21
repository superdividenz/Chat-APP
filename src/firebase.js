import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCN32ABbnpWcpzgaD2TuoQPl1MMigmhZCM",
    authDomain: "chat-app-822af.firebaseapp.com",
    projectId: "chat-app-822af",
    storageBucket: "chat-app-822af.appspot.com",
    messagingSenderId: "104605417514",
    appId: "1:104605417514:web:6cded3c96ef50c367ec353",
    measurementId: "G-K5JDSHJVHG"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
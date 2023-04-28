// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const clientCredentials = {
    apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)
}
export default firebase

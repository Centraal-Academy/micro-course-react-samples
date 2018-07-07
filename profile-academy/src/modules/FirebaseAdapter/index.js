/*
  global FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID
*/
import firebase from 'firebase/app'
import 'firebase/auth'

function initFirebase (firebase) {
  const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
  }

  firebase.initializeApp(config)
}

initFirebase(firebase)

const adapter = {
  getInstance: () => firebase,
  getAuth: () => firebase.auth
}

export default adapter

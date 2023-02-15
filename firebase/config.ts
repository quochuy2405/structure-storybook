import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDwgEs7rqwWC8njqQSjuwnQH8WRmih7au0',
  authDomain: 'ftisuvn.firebaseapp.com',
  projectId: 'ftisuvn',
  storageBucket: 'ftisuvn.appspot.com',
  messagingSenderId: '408809929198',
  appId: '1:408809929198:web:608c4fc7367f48116a76ff',
  measurementId: 'G-W1387ZD42P'
}
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Use these for db & auth
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
export default firebase

import firebase from 'firebase/app'
import 'firebase/firestore'

const config = ***REMOVED***
  apiKey: "AIzaSyAm31tTHPuaSkBR1Ff7pYAavUX6K1DlZ5g",
  authDomain: "let-it-go-ce90f.firebaseapp.com",
  databaseURL: "https://let-it-go-ce90f.firebaseio.com",
  projectId: "let-it-go-ce90f",
  storageBucket: "let-it-go-ce90f.appspot.com",
  messagingSenderId: "243397254091",
  appId: "1:243397254091:web:bede1631a9ce7f43",
***REMOVED***

firebase.initializeApp(config)
const db = firebase.firestore()

export default db

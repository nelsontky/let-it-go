var firebase = require("firebase/app")
require("firebase/auth")
require("firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAm31tTHPuaSkBR1Ff7pYAavUX6K1DlZ5g",
  authDomain: "let-it-go-ce90f.firebaseapp.com",
  databaseURL: "https://let-it-go-ce90f.firebaseio.com",
  projectId: "let-it-go-ce90f",
  storageBucket: "let-it-go-ce90f.appspot.com",
  messagingSenderId: "243397254091",
  appId: "1:243397254091:web:bede1631a9ce7f43",
}

let instance

class Firebase {
  constructor() {
    if (instance) {
      return instance
    }
    firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore()
    this.auth = firebase.auth()
    this.firebase = firebase
    instance = this
  }
}

export default Firebase

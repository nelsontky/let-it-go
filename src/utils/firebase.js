var firebase = require("firebase/app")
require("firebase/auth")
require("firebase/firestore")
const firebaseConfig = {
  apiKey: `${process.env.GATSBY_GOOGLE_MAPS_API}`,
  authDomain: "let-it-go-e6229.firebaseapp.com",
  databaseURL: "https://let-it-go-e6229.firebaseio.com",
  projectId: "let-it-go-e6229",
  storageBucket: "let-it-go-e6229.appspot.com",
  messagingSenderId: "917575844853",
  appId: "1:917575844853:web:88ec0cbe059a0d43"
};
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

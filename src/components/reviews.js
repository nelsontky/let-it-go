import React from "react"
import Firebase from "../utils/firebase"
import ***REMOVED*** Helmet ***REMOVED*** from "react-helmet"

class Reviews extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()
    this.state = ***REMOVED***
      reviews: [],
      isSignedIn: false,
      myReview: "",
    ***REMOVED***

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  ***REMOVED***

  componentDidMount() ***REMOVED***
    this.firebase = new Firebase()

    this.db = this.firebase.db
    this.auth = this.firebase.auth
    this.ui = this.firebase.ui

    this.db
      .collection("toilets")
      .doc("COM1 Level 1 Main Entrance")
      .onSnapshot(doc => ***REMOVED***
        this.setState(***REMOVED***
          reviews: doc.data().reviews,
        ***REMOVED***)
      ***REMOVED***)

    this.uiConfig = ***REMOVED***
      signInOptions: [
        this.firebase.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      callbacks: ***REMOVED***
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      ***REMOVED***,
    ***REMOVED***
    this.ui.start("#firebaseui-auth-container", this.uiConfig)

    this.auth.onAuthStateChanged(user => ***REMOVED***
      this.setState(***REMOVED*** isSignedIn: !!user ***REMOVED***)
    ***REMOVED***)
  ***REMOVED***

  handleChange(event) ***REMOVED***
    this.setState(***REMOVED*** myReview: event.target.value ***REMOVED***)
  ***REMOVED***

  handleSubmit(event) ***REMOVED***
    event.preventDefault()
    this.db
      .collection("toilets")
      .doc("COM1 Level 1 Main Entrance")
      .set(
        ***REMOVED***
          reviews: this.firebase.firebase.firestore.FieldValue.arrayUnion(***REMOVED***
            name: this.auth.currentUser.displayName,
            review: this.state.myReview,
          ***REMOVED***),
        ***REMOVED***,
        ***REMOVED*** merge: true ***REMOVED***
      )

    this.setState(***REMOVED***
      myReview: "",
    ***REMOVED***)
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div>
        <Helmet>
          <link
            type="text/css"
            rel="stylesheet"
            href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
          />
        </Helmet>
        <h4>Reviews</h4>
        ***REMOVED***!this.state.isSignedIn && (
          <div>
            <div id="firebaseui-auth-container" />
            <p
              style=***REMOVED******REMOVED*** fontSize: "0.7em", color: "gray", textAlign: "center" ***REMOVED******REMOVED***
            >
              Sign in with Google to post a review!
            </p>
          </div>
        )***REMOVED***
        ***REMOVED***this.state.isSignedIn && (
          <div>
            <p>
              Welcome ***REMOVED***this.auth.currentUser.displayName***REMOVED***! You are now
              signed-in!***REMOVED***" "***REMOVED***
              <button
                onClick=***REMOVED***() => ***REMOVED***
                  this.auth.signOut()
                  window.location.reload()
                ***REMOVED******REMOVED***
              >
                Sign-out
              </button>
            </p>
            <form onSubmit=***REMOVED***this.handleSubmit***REMOVED***>
              <label>
                Review:
                <textarea
                  style=***REMOVED******REMOVED*** width: "100%", resize: "none", height: "75px" ***REMOVED******REMOVED***
                  value=***REMOVED***this.state.myReview***REMOVED***
                  onChange=***REMOVED***this.handleChange***REMOVED***
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )***REMOVED***
        ***REMOVED***this.state.reviews.length === 0 ? (
          <p>No reviews (yet!)</p>
        ) : (
          this.state.reviews.map(x => (
            <div>
              <p style=***REMOVED******REMOVED*** color: "blue", fontSize: "80%" ***REMOVED******REMOVED***>***REMOVED***x.name + ": "***REMOVED***</p>
              <p>***REMOVED***x.review***REMOVED***</p>
            </div>
          ))
        )***REMOVED***
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Reviews

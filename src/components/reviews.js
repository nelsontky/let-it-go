import React from "react"
import Firebase from "../utils/firebase"
import ***REMOVED*** Helmet ***REMOVED*** from "react-helmet"

class ReviewText extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)

    this.len = 100

    this.state = ***REMOVED***
      review: this.props.review.slice(0, this.len),
      isTooLong: this.props.review.length > this.len,
    ***REMOVED***
  ***REMOVED***

  onClick = () => ***REMOVED***
    if (this.state.review.length > this.len) ***REMOVED***
      this.setState(***REMOVED***
        review: this.props.review.slice(0, this.len),
      ***REMOVED***)
    ***REMOVED*** else ***REMOVED***
      this.setState(***REMOVED***
        review: this.props.review,
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div>
        ***REMOVED***this.props.review.length > this.len && this.state.review.length <= this.len
          ? this.state.review + "..."
          : this.state.review***REMOVED***
        ***REMOVED***this.state.isTooLong && (
          <div>
            <button
              style=***REMOVED******REMOVED***
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                display: "inline",
                margin: "0",
                padding: "0",
                color: "#1ca086",
                fontSize: "60%",
              ***REMOVED******REMOVED***
              onClick=***REMOVED***this.onClick***REMOVED***
            >
              ***REMOVED***this.state.review.length > this.len ? "Show less" : "Show more"***REMOVED***
            </button>
          </div>
        )***REMOVED***
      </div>
    )
  ***REMOVED***
***REMOVED***

class Reviews extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
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
    if (this.firebase.ui == null) ***REMOVED***
      const firebaseui = require("firebaseui")
      this.firebase.ui = new firebaseui.auth.AuthUI(this.auth)
    ***REMOVED***

    this.db
      .collection("toilets")
      .doc(this.props.name)
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
    this.firebase.ui.start("#firebaseui-auth-container", this.uiConfig)

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
      .doc(this.props.name)
      .set(
        ***REMOVED***
          reviews: this.firebase.firebase.firestore.FieldValue.arrayUnion(***REMOVED***
            name: this.auth.currentUser.displayName,
            review: this.state.myReview,
            date: new Date(),
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
              <input
                type="submit"
                value="Submit"
                disabled=***REMOVED***this.state.myReview.trim() === ""***REMOVED***
              />
            </form>
          </div>
        )***REMOVED***
        <table style=***REMOVED******REMOVED*** tableLayout: "fixed" ***REMOVED******REMOVED***>
          <tbody>
            ***REMOVED***this.state.reviews.length === 0 ? (
              <tr key=***REMOVED***1***REMOVED***>
                <td>
                  <p>No reviews (yet!)</p>
                </td>
              </tr>
            ) : (
              this.state.reviews
                .map((x, i) => ***REMOVED***
                  return (
                    <tr key=***REMOVED***i***REMOVED***>
                      <td>
                        <strong style=***REMOVED******REMOVED*** color: "blue", fontSize: "80%" ***REMOVED******REMOVED***>
                          ***REMOVED***x.name***REMOVED***
                        </strong>
                        <span style=***REMOVED******REMOVED*** color: "gray", fontSize: "80%" ***REMOVED******REMOVED***>
                          ***REMOVED***" • " +
                            x.date.toDate().toLocaleString("default", ***REMOVED***
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            ***REMOVED***)***REMOVED***
                        </span>
                        <br />
                        <ReviewText review=***REMOVED***x.review***REMOVED*** />
                      </td>
                    </tr>
                  )
                ***REMOVED***)
                .reverse()
            )***REMOVED***
          </tbody>
        </table>
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Reviews

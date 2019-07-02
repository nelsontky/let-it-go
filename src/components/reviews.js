import React from "react"
import Firebase from "../utils/firebase"
import * as utils from "../utils/utils"
import ***REMOVED*** Helmet ***REMOVED*** from "react-helmet"

const uniqid = require("uniqid")

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
      <div key=***REMOVED***this.props.review***REMOVED***>
        ***REMOVED***this.props.review.length > this.len &&
        this.state.review.length <= this.len
          ? this.state.review + "..."
          : this.state.review***REMOVED***
        ***REMOVED***this.state.isTooLong && (
          <div>
            <button
              style=***REMOVED***utils.buttonToLinkStyle("#1ca086", "60%")***REMOVED***
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
      reviewsLoading: true,
    ***REMOVED***

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  ***REMOVED***

  componentDidMount() ***REMOVED***
    this.firebase = new Firebase()

    this.db = this.firebase.db
    this.auth = this.firebase.auth
    if (this.firebase.ui == null) ***REMOVED***
      const firebaseui = require("firebaseui")
      this.firebase.ui = new firebaseui.auth.AuthUI(this.auth)
    ***REMOVED***

    this.snapshot = this.db
      .collection("reviews")
      .doc(this.props.name)
      .collection("users")
      .onSnapshot(querySnapshot => ***REMOVED***
        let reviews = []
        querySnapshot.forEach(doc => ***REMOVED***
          reviews = doc.data().userReviews.concat(reviews)
        ***REMOVED***)
        reviews.sort((a, b) => b.date.toDate() - a.date.toDate())
        this.setState(***REMOVED***
          reviews,
          reviewsLoading: false,
        ***REMOVED***)
      ***REMOVED***)

    this.uiConfig = ***REMOVED***
      signInOptions: [
        this.firebase.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: ***REMOVED***
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      ***REMOVED***,
    ***REMOVED***
    this.firebase.ui.start("#firebaseui-auth-container", this.uiConfig)

    this.stopAuthListener = this.auth.onAuthStateChanged(user => ***REMOVED***
      this.setState(***REMOVED*** isSignedIn: !!user ***REMOVED***)
    ***REMOVED***)
  ***REMOVED***

  handleChange(event) ***REMOVED***
    this.setState(***REMOVED*** myReview: event.target.value ***REMOVED***)
  ***REMOVED***

  handleSubmit(event) ***REMOVED***
    event.preventDefault()

    this.db
      .collection("reviews")
      .doc(this.props.name)
      .collection("users")
      .doc(this.auth.currentUser.uid)
      .set(
        ***REMOVED***
          userReviews: this.firebase.firebase.firestore.FieldValue.arrayUnion(***REMOVED***
            id: uniqid(),
            name: this.auth.currentUser.displayName,
            review: this.state.myReview,
            date: new Date(),
            uid: this.auth.currentUser.uid,
          ***REMOVED***),
        ***REMOVED***,
        ***REMOVED*** merge: true ***REMOVED***
      )

    this.setState(***REMOVED***
      myReview: "",
    ***REMOVED***)
  ***REMOVED***

  handleDelete(id) ***REMOVED***
    if (window.confirm(`Are you sure you want to delete your review?`)) ***REMOVED***
      this.db
        .collection("reviews")
        .doc(this.props.name)
        .collection("users")
        .doc(this.auth.currentUser.uid)
        .set(***REMOVED***
          userReviews: this.state.reviews.filter(
            x => x.uid === this.auth.currentUser.uid && x.id !== id
          ),
        ***REMOVED***)
    ***REMOVED***
  ***REMOVED***

  componentWillUnmount() ***REMOVED***
    this.snapshot()
    this.stopAuthListener()
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
        ***REMOVED***this.state.isSignedIn && !this.state.reviewsLoading && (
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
                <textarea
                  style=***REMOVED******REMOVED*** width: "100%", resize: "none", height: "75px" ***REMOVED******REMOVED***
                  value=***REMOVED***this.state.myReview***REMOVED***
                  onChange=***REMOVED***this.handleChange***REMOVED***
                  placeholder="Write a review..."
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
                  ***REMOVED***!this.state.reviewsLoading ? (
                    <p>No reviews (yet!)</p>
                  ) : (
                    <p>Reviews are loading...</p>
                  )***REMOVED***
                </td>
              </tr>
            ) : (
              this.state.reviews.map((x, i) => ***REMOVED***
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
                      ***REMOVED***this.state.isSignedIn &&
                        x.uid === this.auth.currentUser.uid && (
                          <span style=***REMOVED******REMOVED*** color: "gray", fontSize: "80%" ***REMOVED******REMOVED***>
                            ***REMOVED***" • "***REMOVED***
                            <button
                              onClick=***REMOVED***() => this.handleDelete(x.id)***REMOVED***
                              style=***REMOVED***utils.buttonToLinkStyle("red", "100%")***REMOVED***
                            >
                              Delete
                            </button>
                          </span>
                        )***REMOVED***
                      <br />
                      <ReviewText key=***REMOVED***x.id***REMOVED*** review=***REMOVED***x.review***REMOVED*** />
                    </td>
                  </tr>
                )
              ***REMOVED***)
            )***REMOVED***
          </tbody>
        </table>
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Reviews

import React from "react"
import Firebase from "../utils/firebase"
import * as utils from "../utils/utils"
import { Helmet } from "react-helmet"
import Stars from "../components/stars"
import StarsStatic from "../components/starsStatic"

const uniqid = require("uniqid")

class ReviewText extends React.Component {
  constructor(props) {
    super(props)

    this.len = 240

    this.state = {
      review: this.props.review.slice(0, this.len),
      isTooLong: this.props.review.length > this.len,
    }
  }

  onClick = () => {
    if (this.state.review.length > this.len) {
      this.setState({
        review: this.props.review.slice(0, this.len),
      })
    } else {
      this.setState({
        review: this.props.review,
      })
    }
  }

  render() {
    return (
      <div key={this.props.review}>
        {this.props.review.length > this.len &&
        this.state.review.length <= this.len
          ? this.state.review + "..."
          : this.state.review}
        {this.state.isTooLong && (
          <div>
            <button
              style={utils.buttonToLinkStyle("#1ca086", "60%")}
              onClick={this.onClick}
            >
              {this.state.review.length > this.len ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    )
  }
}

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      isSignedIn: false,
      myReview: "",
      reviewsLoading: true,
      starsState: [false, false, false, false, false],
    }
    this.starsKey = 0

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleStarClick = this.handleStarClick.bind(this)
  }

  componentDidMount() {
    this.firebase = new Firebase()

    this.db = this.firebase.db
    this.auth = this.firebase.auth
    if (this.firebase.ui == null) {
      const firebaseui = require("firebaseui")
      this.firebase.ui = new firebaseui.auth.AuthUI(this.auth)
    }

    this.snapshot = this.db
      .collection("reviews")
      .doc(this.props.name)
      .collection("users")
      .onSnapshot(querySnapshot => {
        let reviews = []
        querySnapshot.forEach(doc => {
          reviews = doc.data().userReviews.concat(reviews)
        })
        reviews.sort((a, b) => b.date.toDate() - a.date.toDate())
        this.setState({
          reviews,
          reviewsLoading: false,
        })
      })

    this.uiConfig = {
      signInOptions: [
        this.firebase.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      },
    }
    this.firebase.ui.start("#firebaseui-auth-container", this.uiConfig)

    this.stopAuthListener = this.auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  handleChange(event) {
    this.setState({ myReview: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.db
      .collection("reviews")
      .doc(this.props.name)
      .collection("users")
      .doc(this.auth.currentUser.uid)
      .set(
        {
          userReviews: this.firebase.firebase.firestore.FieldValue.arrayUnion({
            id: uniqid(),
            name: this.auth.currentUser.displayName,
            review: this.state.myReview,
            date: new Date(),
            uid: this.auth.currentUser.uid,
            score: utils.starsStateToScore(this.state.starsState),
          }),
        },
        { merge: true }
      )

    this.setState({
      myReview: "",
      starsState: [false, false, false, false, false]
    })
  }

  handleDelete(id) {
    if (window.confirm(`Are you sure you want to delete your review?`)) {
      this.db
        .collection("reviews")
        .doc(this.props.name)
        .collection("users")
        .doc(this.auth.currentUser.uid)
        .set({
          userReviews: this.state.reviews.filter(
            x => x.uid === this.auth.currentUser.uid && x.id !== id
          ),
        })
    }
  }

  handleStarClick(event) {
    const starsState = this.state.starsState
      .slice()
      .map((x, i) => i <= parseInt(event.target.id))

    this.setState({
      starsState,
    })
  }

  componentWillUnmount() {
    this.snapshot()
    this.stopAuthListener()
  }

  render() {
    return (
      <div>
        <Helmet>
          <link
            type="text/css"
            rel="stylesheet"
            href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          />
        </Helmet>
        <h4>Reviews</h4>
        {!this.state.isSignedIn && (
          <div>
            <div id="firebaseui-auth-container" />
            <p
              style={{ fontSize: "0.7em", color: "gray", textAlign: "center" }}
            >
              Sign in with Google to post a review!
            </p>
          </div>
        )}
        {this.state.isSignedIn && !this.state.reviewsLoading && (
          <div>
            <p>
              Welcome {this.auth.currentUser.displayName}! You are now
              signed-in!{" "}
              <button
                onClick={() => {
                  this.auth.signOut()
                  window.location.reload()
                }}
              >
                Sign-out
              </button>
            </p>
            <form onSubmit={this.handleSubmit}>
              <Stars
                handleStarClick={this.handleStarClick}
                starsState={this.state.starsState}
                key={this.starsKey++}
              />
              <textarea
                style={{ width: "100%", resize: "none", height: "75px" }}
                value={this.state.myReview}
                onChange={this.handleChange}
                placeholder="Write a review..."
              />
              <input
                type="submit"
                value="Submit"
                disabled={
                  this.state.myReview.trim() === "" ||
                  utils.starsStateToScore(this.state.starsState) === 0
                }
              />
            </form>
          </div>
        )}
        <table style={{ tableLayout: "fixed" }}>
          <tbody>
            {this.state.reviews.length === 0 ? (
              <tr key={1}>
                <td>
                  {!this.state.reviewsLoading ? (
                    <p>No reviews (yet!)</p>
                  ) : (
                    <p>Reviews are loading...</p>
                  )}
                </td>
              </tr>
            ) : (
              this.state.reviews.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <strong style={{ color: "blue", fontSize: "80%" }}>
                        {x.name}
                      </strong>
                      {this.state.isSignedIn &&
                        x.uid === this.auth.currentUser.uid && (
                          <span style={{ color: "gray", fontSize: "80%" }}>
                            {" • "}
                            <button
                              onClick={() => this.handleDelete(x.id)}
                              style={utils.buttonToLinkStyle("red", "100%")}
                            >
                              Delete
                            </button>
                          </span>
                        )}
                      <br />
                      <span>
                        <StarsStatic score={x.score} />
                        <span style={{ color: "gray", fontSize: "80%" }}>
                          {" " + utils.howLongAgo(x.date)}
                        </span>
                      </span>
                      <br />
                      <ReviewText key={x.id} review={x.review} />
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Reviews

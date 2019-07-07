import React from "react"
import Firebase from "../utils/firebase"
import * as utils from "../utils/utils"
import { Helmet } from "react-helmet"
import Stars from "../components/stars"
import StarsStatic from "../components/starsStatic"
import PaginatedArray from "../components/paginatedArray"

class ReviewText extends React.Component {
  constructor(props) {
    super(props)

    this.len = 240

    this.state = {
      review: this.props.review.slice(0, this.len),
      isTooLong: this.props.review.length > this.len,
      sortBy: "newest",
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

class SingleReview extends React.Component {
  render() {
    return (
      <span>
        <img
          src={this.props.children.photoURL}
          alt={this.props.children.name}
          width={36}
          height={36}
          style={{ verticalAlign: "top" }}
        />
        <strong style={{ color: "blue", fontSize: "80%" }}>
          {" " + this.props.children.name}
        </strong>
        {/* Edit button (if shown) */}
        {this.props.handleEdit != null && (
          <span style={{ color: "gray", fontSize: "80%" }}>
            {" • "}
            <button
              onClick={this.props.handleEdit}
              style={utils.buttonToLinkStyle("red", "100%")}
            >
              Edit
            </button>
          </span>
        )}
        <br />
        <span>
          <StarsStatic score={this.props.children.score} />
          <span style={{ color: "gray", fontSize: "80%" }}>
            {" " + utils.howLongAgo(this.props.children.date)}
          </span>
        </span>
        <br />
        <ReviewText review={this.props.children.review} />
      </span>
    )
  }
}

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      otherReviews: [],
      isSignedIn: false,
      myReview: "",
      reviewsLoading: true,
      starsState: [false, false, false, false, false],
      pageNumber: 1,
      inputBoxShown: true,
    }
    this.starsKey = 0
    this.paginateKey = 0

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleStarClick = this.handleStarClick.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
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
          reviews.push(doc.data().review)
        })
        reviews.sort((a, b) => b.date.toDate() - a.date.toDate())
        this.setState({
          reviews,
          reviewsLoading: false,
          inputBoxShown:
            this.auth.currentUser != null &&
            reviews.filter(x => x.uid === this.auth.currentUser.uid).length !==
              1,
          otherReviews:
            this.auth.currentUser == null
              ? reviews
              : reviews.filter(x => x.uid !== this.auth.currentUser.uid),
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
      this.setState({
        isSignedIn: !!user,
        otherReviews:
          this.auth.currentUser == null
            ? this.state.reviews
            : this.state.reviews.filter(
                x => x.uid !== this.auth.currentUser.uid
              ),
      })
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
      .set({
        review: {
          name: this.auth.currentUser.displayName,
          photoURL: this.auth.currentUser.photoURL,
          review: this.state.myReview,
          date: new Date(),
          uid: this.auth.currentUser.uid,
          score: utils.starsStateToScore(this.state.starsState),
        },
      })

    this.setState({
      myReview: "",
      starsState: [false, false, false, false, false],
      sortBy: "newest",
      pageNumber: 1,
    })
  }

  handleEdit() {
    console.log("edit")
    const review = this.state.reviews.filter(
      x => x.uid === this.auth.currentUser.uid
    )[0]

    this.setState({
      myReview: review.review,
      starsState: [true, true, true, true, true].map(
        (x, i) => i < review.score
      ),
      inputBoxShown: true,
    })
  }

  handleStarClick(event) {
    const starsState = this.state.starsState
      .slice()
      .map((x, i) => i <= parseInt(event.target.id))

    this.setState({
      starsState,
    })
  }

  handleSort(event) {
    let reviewsCopy = this.state.reviews.slice()
    if (event.target.value === "newest") {
      reviewsCopy.sort((r1, r2) => r2.date.toDate() - r1.date.toDate())
    } else if (event.target.value === "lowest") {
      reviewsCopy.sort((r1, r2) => r1.score - r2.score)
    } else {
      reviewsCopy.sort((r1, r2) => r2.score - r1.score)
    }

    this.setState({
      reviews: reviewsCopy,
      sortBy: event.target.value,
      pageNumber: 1,
      otherReviews:
        this.auth.currentUser == null
          ? reviewsCopy
          : reviewsCopy.filter(x => x.uid !== this.auth.currentUser.uid),
    })
  }

  handlePageChange(event) {
    this.setState({ pageNumber: parseInt(event.target.id) })
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
        {/* Signed in message */}
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

            {/* Comment input box/My review */}
            {this.state.inputBoxShown && !this.state.reviewsLoading ? (
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
            ) : (
              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "grey",
                  borderWidth: "1px",
                }}
              >
                <SingleReview handleEdit={this.handleEdit}>
                  {
                    this.state.reviews.filter(
                      x => x.uid === this.auth.currentUser.uid
                    )[0]
                  }
                </SingleReview>
              </div>
            )}
          </div>
        )}
        {/* Sorting dropdown */}
        <br />
        {!this.state.reviewsLoading && this.state.otherReviews.length !== 0 && (
          <div>
            <label>
              Sort by:{" "}
              <select value={this.state.sortBy} onChange={this.handleSort}>
                <option value="newest">Newest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </label>
          </div>
        )}
        {/* Comments start here */}
        <table style={{ tableLayout: "fixed" }}>
          {this.state.otherReviews.length === 0 ? (
            <tbody>
              <tr key={1}>
                <td>
                  {!this.state.reviewsLoading ? (
                    <p>No reviews (yet!)</p>
                  ) : (
                    <p>Reviews are loading...</p>
                  )}
                </td>
              </tr>
            </tbody>
          ) : (
            <PaginatedArray
              key={this.paginateKey++}
              pageSize={8}
              pageNumber={this.state.pageNumber}
              handlePageChange={this.handlePageChange}
              columns={1}
            >
              {this.state.otherReviews.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <SingleReview>{x}</SingleReview>
                    </td>
                  </tr>
                )
              })}
            </PaginatedArray>
          )}
        </table>
      </div>
    )
  }
}

export default Reviews

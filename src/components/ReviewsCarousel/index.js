// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {isActiveProfileIndex: 0}

  isClickedRightArrow = () => {
    const {isActiveProfileIndex} = this.state
    const {reviewsList} = this.props

    if (isActiveProfileIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        isActiveProfileIndex: prevState.isActiveProfileIndex + 1,
      }))
    }
  }

  isRenderedReviewsList = reviews => {
    const {imgUrl, username, companyName, description} = reviews
    return (
      <div className="profile-container">
        <img className="profile-image" src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  isClickedLeftArrow = () => {
    const {isActiveProfileIndex} = this.state

    if (isActiveProfileIndex > 0) {
      this.setState(prevState => ({
        isActiveProfileIndex: prevState.isActiveProfileIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {isActiveProfileIndex} = this.state
    const currentReviewDetails = reviewsList[isActiveProfileIndex]

    return (
      <div className="bg-container">
        <div>
          <h1 className="title">Reviews</h1>
          <div className="reviews-container">
            <button
              className="button"
              type="button"
              onClick={this.isClickedLeftArrow}
              data-testid="leftArrow"
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.isRenderedReviewsList(currentReviewDetails)}
            <button
              className="button"
              type="button"
              onClick={this.isClickedRightArrow}
              data-testid="rightArrow"
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

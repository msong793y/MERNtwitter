import React from 'react';
import RideIndexItem from './RideIndexItem';

class RideIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {

    return (
      <ul className="ride-index-ul">
        {this.props.rides.reverse().map((ride, idx) => (
          <RideIndexItem
            ride={ride}
            key={idx}
            signedIn={this.props.signedIn}
            activateModal={this.props.activateModal}
            currentUserId={this.props.currentUserId}
            postReview={this.props.postReview}
            fetchReviews={this.props.fetchReviews}
            // reviewsGone={this.props.reviewsGone}
            deleteReview={this.props.deleteReview}
            currentUserName={this.props.currentUserName}
            reviews={this.props.reviews}
          />
        ))}
      </ul>
    );
  }
}

export default RideIndex;
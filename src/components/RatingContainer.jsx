import React from "react";
import "../assets/styles/ratingContainer.css";
import star from "../assets/images/icon-star.svg";

function RatingContainer() {
	return (
		<div className="container">
			<div className="front">
				<div className="topStar">
					<div className="topStar__greyCircle"></div>
					<img src={star} className="topStar__starIcon" alt="" />
				</div>
				<div>
					<div className="titleText">How did we do?</div>
					<p>
						Please let us know how we did with your support request. All feedback is
						appreciated to help us improve our offering!
					</p>
				</div>
				<div className="ratingContainer">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
				</div>
				<button className="submitButton">SUBMIT</button>
			</div>
		</div>
	);
}

export default RatingContainer;

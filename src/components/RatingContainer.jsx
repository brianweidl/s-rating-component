import React, { useRef, useState } from "react";
import "../assets/styles/ratingContainer.css";
import star from "../assets/images/icon-star.svg";
import thankyouImage from "../assets/images/illustration-thank-you.svg";

function RatingContainer() {
	const [flip, setFlip] = useState(false);
	const [rating, setRating] = useState(null);
	const [selected, setSelected] = useState(false);
	const warningRef = useRef();
	const showBack = () => {
		if (!rating) {
			warningRef.current.className += " show";
			return;
		}

		setFlip(true);
	};

	const selectRating = (e) => {
		setRating(e.target.innerText);
		warningRef.current.className = "warning";
		setSelected(parseInt(e.target.innerText));
	};

	return (
		<div className={`container ${flip ? "flip" : ""}`}>
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
					<span
						onClick={(e) => selectRating(e)}
						className={`${selected >= 1 ? "selected" : ""}`}
					>
						1
					</span>
					<span
						onClick={(e) => selectRating(e)}
						className={`${selected >= 2 ? "selected" : ""}`}
					>
						2
					</span>
					<span
						onClick={(e) => selectRating(e)}
						className={`${selected >= 3 ? "selected" : ""}`}
					>
						3
					</span>
					<span
						onClick={(e) => selectRating(e)}
						className={`${selected >= 4 ? "selected" : ""}`}
					>
						4
					</span>
					<span
						onClick={(e) => selectRating(e)}
						className={`${selected === 5 ? "selected" : ""}`}
					>
						5
					</span>
				</div>

				<button className="submitButton" onClick={showBack}>
					SUBMIT
				</button>
				<div ref={warningRef} className="warning">
					Choose rating
				</div>
			</div>
			<div className="back">
				<img className="backImage" src={thankyouImage} alt="" />
				<div className="ratingSelection">You selected {rating} out of 5</div>
				<div className="titleText">Thank You!</div>
				<p>
					We appreciate you taking the time to give a rating. If you ever need more
					support, don’t hesitate to get in touch!
				</p>
			</div>
		</div>
	);
}

export default RatingContainer;

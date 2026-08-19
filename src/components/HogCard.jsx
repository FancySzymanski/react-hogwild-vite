import React, { useState } from "react";

function HogCard({ hog }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	function handleCardClick() {
		setIsExpanded((isExpanded) => !isExpanded);
	}

	function handleHideClick(event) {
		event.stopPropagation();
		setIsHidden(true);
	}

	if (isHidden) {
		return null;
	}

	return (
		<div  className="ui eight wide column">
			<div aria-label="hog card" className="ui card" onClick={handleCardClick}>
				<img className="ui image" src={hog.image} alt={"Photo of " + hog.name} />
				<div className="content">
					<h3 className="header">{hog.name}</h3>
					{isExpanded && (
                            <div className="description">
                                <p>Specialty: {hog.specialty}</p>
                                <p>{hog.weight}</p>
                                <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                                <p>{hog["highest medal achieved"]}</p>
                            </div>
                            )}
				</div>
				<button onClick={handleHideClick}>Hide Me</button>
			</div>
		</div>
	);
}

export default HogCard;
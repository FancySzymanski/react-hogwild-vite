import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
	return (
	<>
		<p> Click on a hog to see more details!</p>
		<div className="ui grid container">
			{hogs.map((hog) => (
				<HogCard key={hog.name} hog={hog} />
			))}
		</div>
	</>
	);
}

export default HogList;
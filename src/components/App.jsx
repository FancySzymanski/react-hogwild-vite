import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";
import hogData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogData);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	function handleGreasedChange() {
		setShowGreasedOnly((showGreasedOnly) => !showGreasedOnly);
	}

	function handleSortChange(event) {
		setSortBy(event.target.value);
	}

	function handleAddHog(newHog) {
		setHogs((hogs) => [...hogs, newHog]);
	}

	let hogsToDisplay = showGreasedOnly
		? hogs.filter((hog) => hog.greased)
		: hogs;

	hogsToDisplay = [...hogsToDisplay].sort((a, b) => {
		if (sortBy === "weight") {
			return a.weight - b.weight;
		}
		return a.name.localeCompare(b.name);
	});

	return (
		<div className="App">
			<Nav />

			<HogForm onAddHog={handleAddHog} />

			<div>
				<input
					type="checkbox"
					id="greased-filter"
					checked={showGreasedOnly}
					onChange={handleGreasedChange}
				/>
				<label htmlFor="greased-filter">Greased Pigs Only?
				</label>
			</div>

			<div>
				<label htmlFor="sort-select">Sort by:</label>
				<select id="sort-select" value={sortBy} onChange={handleSortChange}>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>

			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
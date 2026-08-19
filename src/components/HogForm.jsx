import React, { useState } from "react";

function HogForm({ onAddHog }) {
	const [name, setName] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [weight, setWeight] = useState("");
	const [greased, setGreased] = useState(false);
	const [medal, setMedal] = useState("bronze");
	const [image, setImage] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const newHog = {
			name: name,
			specialty: specialty,
			weight: parseFloat(weight),
			greased: greased,
			"highest medal achieved": medal,
			image: image,
		};
		onAddHog(newHog);

		setName("");
		setSpecialty("");
		setWeight("");
		setGreased(false);
		setMedal("bronze");
		setImage("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="hog-name">Name:</label>
				<input
					type="text"
					id="hog-name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="hog-specialty">Specialty:</label>
				<input
					type="text"
					id="hog-specialty"
					value={specialty}
					onChange={(event) => setSpecialty(event.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="hog-weight">Weight:</label>
				<input
					type="number"
					id="hog-weight"
					value={weight}
					onChange={(event) => setWeight(event.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="hog-greased">Greased?</label>
				<input
					type="checkbox"
					id="hog-greased"
					checked={greased}
					onChange={() => setGreased((greased) => !greased)}
				/>
			</div>

			<div>
				<label htmlFor="hog-medal">Highest Medal Achieved:</label>
				<select
					id="hog-medal"
					value={medal}
					onChange={(event) => setMedal(event.target.value)}
				>
					<option value="wood">Wood</option>
					<option value="bronze">Bronze</option>
					<option value="silver">Silver</option>
					<option value="gold">Gold</option>
					<option value="platinum">Platinum</option>
					<option value="diamond">Diamond</option>
				</select>
			</div>

			<div>
				<label htmlFor="hog-image">Image URL:</label>
				<input
					type="text"
					id="hog-image"
					value={image}
					onChange={(event) => setImage(event.target.value)}
				/>
			</div>

			<button type="submit">Add Hog</button>
		</form>
	);
}

export default HogForm;
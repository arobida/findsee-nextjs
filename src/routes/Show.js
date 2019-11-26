import React, { useState } from 'react';

const Show = ({ showId, location, match, history }) => {
	const [show, setShow] = useState([]);

console.log("show")
	const getData = async () => {
		const res = await fetch(`https://api.tvmaze.com/shows/${match.params.id}`);
		const data = await res.json();
		await console.log(data);
		setShow(data);
	};


	return (
		<div className="container">
			<div>
				<h1 className="showTitle">hey</h1>
			</div>
		</div>
	);
};

const strip = html => {
	var temporalDivElement = document.createElement('div');
	temporalDivElement.innerHTML = html;
	return temporalDivElement.textContent || temporalDivElement.innerText || '';
};

export default Show;

import React, { useState } from 'react';

const Show = ({ showId, location }) => {
	const [show, setShow] = useState([]);

	// 	const getData = async () => {
	// 	const res = await fetch(`https://api.tvmaze.com/search/shows?q=${location.id}`);
	// 	const data = await res.json();
	// 	//console.log(data);
	// 	setShow(data);
	// 	console.log(show);
	// 	return data;
	// };

console.log(location)
	return (
		<div className="container">
			{showId.map(i => {
				const item = {
					key: i.show.id,
					title: i.show.name,
					rating: i.show.rating.average,
					net: i.show.network ? '@' + i.show.network.name : null,
					netSite: i.show.officialSite ? i.show.officialSite : null,
					altText: i.show.name.toString(),
					imgSrc: i.show.image
						? i.show.image.medium
						: 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
					sum: strip(i.show.summary)
				};
				console.log(item)
				return (
					<div key={item.key}>
						<h1 className="showTitle">{item.title}</h1>
					</div>
				);
			})}
			<h1 className="showTitle">Welcome to the show page</h1>
		</div>
	);
};

const strip = html => {
	var temporalDivElement = document.createElement('div');
	temporalDivElement.innerHTML = html;
	return temporalDivElement.textContent || temporalDivElement.innerText || '';
};

export default Show;

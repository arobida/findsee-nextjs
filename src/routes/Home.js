import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ shows }) => {
	console.log("home")
	return (
		<div className="container">
			{shows.length === 0 ? (
				<div className="loader">
					<h2 className="loader">Waiting For Your Search...</h2>
				</div>
			) : (
				shows.map(i => {
					const strip = html => {
						var temporalDivElement = document.createElement('div');
						temporalDivElement.innerHTML = html;
						return (
							temporalDivElement.textContent ||
							temporalDivElement.innerText ||
							''
						);
					};
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
					return (
						<div className="show" key={item.key}>
							<h1 className="title">{item.title}</h1>
							<h3 className="rating">Rating: {item.rating}</h3>
							<div>
								<Link to={`show/${item.key}`} className="showLink">
									<button className="view shadow">View</button>
								</Link>
								<img className="pic" alt={item.altText} src={item.imgSrc} />
							</div>
							<h3>
								<span>
									{item.netSite ? (
										<a
											href={item.netSite}
											target="_blank"
											rel="noopener noreferrer"
											style={{ marginRight: '.5em' }}
										>
											Watch Now
										</a>
									) : null}
									<span>{item.net}</span>
								</span>
							</h3>
							<p className="summary">{item.sum}</p>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Home;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Headroom from 'react-headroom';

const App = () => {
	const [val, setVal] = useState('');
	const [shows, setShows] = useState([]);

	const getData = async () => {
		const res = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
		const data = await res.json();
		//console.log(data);
		setShows(data);
		console.log(shows);
		return data;
	};

	const change = e => {
		const params = [e.target.value];
		const esc = encodeURIComponent;
		const query = Object.keys(params)
			.map(k => esc(k) + esc(params[k]))
			.join('&');
		setVal(query);
		console.log(val);
	};
	const toTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	const submit = e => {
		e.preventDefault();
		getData();
		toTop();
		e.target.reset()
	};
	return (
		<div className="App">
			<Headroom>
				<form onSubmit={submit}>
					<input
						className="search"
						type="text"
						placeholder="🔎 Shows Search 🔍"
						onChange={change}
					/>
				</form>
			</Headroom>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Search for a show</h2>
			</header>
			<div className="container">
				{shows.length === 0 ? (
					<p>Waiting...</p>
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
							net: i.show.network ? i.show.network.name : 'Unknown',
							netSite: i.show.network ? i.show.officialSite : null,
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
								<img className="pic" alt={item.altText} src={item.imgSrc} />
								<h3>
									<a
										href={item.netSite}
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.net}
									</a>
								</h3>
								<p className="summary">{item.sum}</p>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default App;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Headroom from 'react-headroom';
import Home from './routes/Home';
import Show from './routes/Show';
import Eye from './components/Eye';

const App = ({ location, match, history }) => {
	const [val, setVal] = useState('');
	const [show, setShow] = useState([]);
	const [results, setResults] = useState(null);
	console.log('test', match);
	const getData = async () => {
		const res = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
		const data = await res.json();
		//console.log(data);
		setShow(data);
		console.log(show);
		return data;
	};

	const change = e => {
		const params = [e.target.value];
		const esc = encodeURIComponent;
		const query = Object.keys(params)
			.map(k => esc(k) + esc(params[k]))
			.join('&');
		setVal(query);
		setResults(e.target.value);
		console.log(val);
	};
	const toTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	const submit = e => {
		e.preventDefault();
		const checkPath = () =>
			location.pathname === '/' ? null : history.goBack();
		getData();
		toTop();
		e.target.reset();
	};
	return (
		<div className="App">
			<a className="home" href="/">
				{/* <img src={eye} alt="eyeball" className="eye blink" /> */}
				<Eye />
			</a>
			<Headroom style={{ zIndex: '40' }}>
				<form onSubmit={submit}>
					<input
						className="search"
						type="text"
						placeholder="🔎 Shows Search 🔍"
						onChange={change}
					/>
				</form>
				{results ? (
					<span className="results">Results for: {results}</span>
				) : null}
			</Headroom>
			<div className="routes">
				<Route
					exact
					path="/"
					render={props => <Home {...props} shows={show} />}
				/>
				<Route
					path="/show/:id"
					render={props => <Show {...props} showId={show} />}
				/>
			</div>
		</div>
	);
};

export default App;

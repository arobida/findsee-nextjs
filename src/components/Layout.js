import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ShowContext } from '../context/ShowContext';
import Headroom from 'react-headroom';
import Eye from './Eye';

const Layout = ({ children }) => {
	const { shows, getShows, query, getQuery } = useContext(ShowContext);
	const router = useRouter();
	const [results, setResults] = useState(null);

	const change = e => {
		const params = [e.target.value];
		const esc = encodeURIComponent;
		const encodedQuery = Object.keys(params)
			.map(k => esc(k) + esc(params[k]))
			.join('&');
		getQuery(encodedQuery);
		setResults(e.target.value);
		console.log(query);
	};

	const toTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	const submit = e => {
		e.preventDefault();
		router.replace('/');
		// const checkPath = () =>
		// 	location.pathname === '/' ? null : history.goBack();
		getShows();
		toTop();
		e.target.reset();
	};
	return (
		<StyledLayout>
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
			<main className="routes">{children}</main>
		</StyledLayout>
	);
};

const StyledLayout = styled.div`
	text-align: center;

	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: #333;
	}

	.loader h2 {
		animation: animate 15s linear infinite;
		background-image: url('https://i.postimg.cc/3JfYgrnj/water-2.png');
		background-repeat: repeat-x;
		color: rgba(255, 255, 255, 0.1);
		font-size: 3em;
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
	}

	@keyframes animate {
		0% {
			background-position: left 0px top 150px;
		}

		40% {
			background-position: left 600px top -30px;
		}

		80% {
			background-position: left 1400px top -30px;
		}

		100% {
			background-position: left 2000px top 150px;
		}
	}

	.eye {
		position: fixed;
		width: 3em;
		top: 18px;
		left: 5px;
		z-index: 5;
	}

	.search {
		width: 60vw;
		font-size: 1.3em;
		height: 2em;
		background: #333;
		color: white;
		text-align: center;
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.search::placeholder {
		color: #f57f17;
	}

	.summary {
		padding: 0 1em 0 1em;
		text-align: center;
		font-size: 1em;
		font-weight: 500;
	}

	.results {
		background: #333;
		color: #f57f17;
		border-radius: 1em;
		padding: 8px;
		font-size: 1.2em;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.showLink {
		z-index: 2;
		position: absolute;
		margin-top: 265px;
		margin-left: 150px;
		color: white;
	}

	.view {
		border-radius: 0.9em;
		background: #0091ea;
		color: white;
		padding: 0.5em;
		font-size: 1em;
	}

	.shadow {
		-webkit-box-shadow: 3px 3px 5px 6px #333; /*Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
		-moz-box-shadow: 3px 3px 5px 6px #333; /*Firefox 3.5 - 3.6 */
		box-shadow: 3px 3px 5px 2px #333; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
	}
`;

export default Layout;

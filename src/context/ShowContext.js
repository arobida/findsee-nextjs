import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const defaultValues = {
	shows: [],
	getShows: () => {}
};

export const ShowContext = createContext(defaultValues);
export const ShowProvider = ({ children }) => {
	const [shows, setShows] = useState([]);
	const [query, setQuery] = useState('');
	const [showId, setId] = useState('');
	const [results, setResults] = useState(null);

	const getShows = async () => {
		const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
		const data = await res.json();
		console.log(data);
		setShows(data);
	};
	useEffect(() => {}, [query]);

	const getQuery = val => {
		setQuery(val);
	};
	const getResults = val => {
		setResults(val);
	};

	const getId = id => {
		setId(id);
		return showId;
	};

	return (
		<ShowContext.Provider
			value={{
				...defaultValues,
				shows,
				getShows,
				query,
				getQuery,
				results,
				getResults,
				showId,
				getId
			}}
		>
			{children}
		</ShowContext.Provider>
	);
};

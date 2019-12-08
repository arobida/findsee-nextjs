import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ShowContext } from '../src/context/ShowContext';
import Layout from '../src/components/Layout';
import { existsTypeAnnotation } from '@babel/types';

const Show = () => {
	const router = useRouter();
	const { showId, getId } = useContext(ShowContext);
	const [show, setShow] = useState({});

	getId(router.query.show);
	console.log(getId);
	useEffect(() => {
		const getShow = async () => {
			const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
			const data = await res.json();
			setShow(data);
		};
		getShow();
	}, [showId]);
	const isImage = show.image
		? show.image.medium
		: 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
	const isTime = show.schedule ? show.schedule.time : 'N/A';
	const exists = (con, val) => con && val;
	return (
		<Layout>
		<button onClick={()=>router.back()}>Go Back</button>
			<h1>{show.name}</h1>
			<img src={isImage} alt={show.name} />
			<h4>
				<a
					href={show.officialSite && show.officialSite}
					target="_blank"
					rel="noopener noreferrer"
				>
					{show.officialSite ? 'Watch' : ''}
				</a>
			</h4>
			<h4>Air Date: {show.premiered}</h4>
			<h4>Status: {show.status}</h4>
			<div>
				<h4>
					Schedule <hr />
				</h4>
				<h6>Time - {isTime}</h6>
				<h6>
					Days -{' '}
					{show.schedule &&
						show.schedule.days.map(day =>
							show.schedule.days.length - 1 === show.schedule.days.indexOf(day)
								? day + ''
								: day + ', '
						)}
				</h6>
				<hr />
			</div>
			<div>
				<h4>
					Network <hr />
				</h4>
				<h6>Company: {show.network && show.network.name}</h6>
				<h6>Code: {show.network && show.network.country.code}</h6>
				<h6>Country: {show.network && show.network.country.name}</h6>
				<h6>Timezone: {show.network && show.network.country.timezone}</h6>
				<hr />
			</div>
		</Layout>
	);
};

export default Show;

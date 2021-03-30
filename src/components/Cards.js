import React from 'react';

import Card from './Card';
import { cardData } from './../data/cardData';
import useFetch from './../helpers/useFetch';

function Cards() {
	const { data } = useFetch(cardData);
	console.log(data);

	return (
		<div className="card-wrapper">
			{data.map((info, index) => {
				return <Card key={index} {...info} />;
			})}
		</div>
	);
}

export default Cards;

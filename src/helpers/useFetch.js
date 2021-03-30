import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(url);
	}, [url]);

	return { data };
};

export default useFetch;

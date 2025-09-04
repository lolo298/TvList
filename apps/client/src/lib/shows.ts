import { PUBLIC_BASE_URL } from '$env/static/public';
export const getTrending = async (page: number = 1) => {
	if (page < 1 || page > 100) throw new Error('Invalid page number');
	const response = await fetch(PUBLIC_BASE_URL + '/shows/trending?page=' + page);
	const data = await response.json();
	return data;
};

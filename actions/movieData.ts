import { getApiResponse } from '@lib/request';
import { log } from 'console';

export const fetchTrending = async () => {
	const data = await getApiResponse('/trending/movie/week');
	// log('data:', data);
	const trending = data.results;
	// log('trending:', trending);
	return trending;
};

export const fetchGenreMovies = async () => {
	const data = await getApiResponse('/genre/movie/list');
	const genres = data.genres;

	for (const genre of genres) {
		const genreData = await getApiResponse(
			`/discover/movie?with_genres=${genre.id}`
		);
		// log('genreData:', genreData);
		// Add movies array to genre object --> For examples: genre = { id: 28, name: 'Action', movies: [ ... ]},
		genre.movies = genreData.results; // Add movies array to genre object //Adding genre.movies is like writing down the list of ingredients next to each type of food.
	}
	return genres;
};

export const searchMovies = async (query: string) => {
	const data = await getApiResponse(`/search/movie?query=${query}`);
	const searchedMovies = data.results;
	return searchedMovies;
};

export const fetchMovieDetails = async (movieId: number) => {
	const data = await getApiResponse(
		`/movie/${movieId}?append_to_response=videos`
	);
	return data;
};

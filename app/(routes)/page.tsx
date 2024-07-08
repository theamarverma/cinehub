import { fetchGenreMovies } from '@actions/movieData';
import CategoryList from '@components/CategoryList';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import { Genre } from '@lib/types';

const Home = async () => {
	const genres = await fetchGenreMovies();
	// const example = genres.slice(0, 2);
	return (
		<div>
			<Navbar />
			<Hero />
			<div className="all-movies">
				{genres.map((genre: Genre) => (
					<CategoryList
						key={genre.id}
						title={genre.name}
						movies={genre.movies || []}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Home;

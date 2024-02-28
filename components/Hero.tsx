import { fetchTrending } from '@actions/movieData';
import HeroCard from './HeroCard';
import { log } from 'console';

const Hero = async () => {
	const trending = await fetchTrending();
	// log('trending:', trending);
	const randomNumber = Math.floor(Math.random() * trending.length);
	const trendingMovie = trending[randomNumber];
	return (
		<div>
			<HeroCard trendingMovie={trendingMovie} />
		</div>
	);
};

export default Hero;

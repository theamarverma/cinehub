import Navbar from '@components/Navbar';
import SearchResults from '@components/SearchResults';
//slug = query //[slug] is the Dynamic Segment like your folder name.
const SearchPage = ({ params }: { params: { query: string } }) => {
	return (
		<>
			<Navbar />
			<SearchResults query={params.query} />
		</>
	);
};

export default SearchPage;

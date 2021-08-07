import React from 'react';
// API
//import API from '../API';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Componnets
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Next from './NextPage';
import Spinner from './Spinner';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setPage } = useHomeFetch();

    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            {!searchTerm && state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        title={movie.title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            <Next prev="prev" next="next" setPage={setPage} />
        </>
    );
};

export default Home;
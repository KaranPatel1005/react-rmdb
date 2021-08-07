import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistantState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (searchTerm = "", page) => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results]
                        : [...movies.results]
            }));

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    // Initial and Search
    useEffect(() => {
        if (page === 1) {
            if (page === 1 && !searchTerm) {
                const sessionState = isPersistantState('homeState');

                if (sessionState) {
                    setState(sessionState);
                    return;
                }
            }
            setState(initialState);
            fetchMovies(searchTerm, 1);
        }
        else {
            // Next and Previous Page
            if (page > 1) {
                const sessionState = isPersistantState(page);

                if (sessionState) {
                    setState(sessionState);
                    return;
                }
            }
            setState(initialState);
            fetchMovies(searchTerm, page);
        }

    }, [searchTerm, page]);

    // NextPage and PreviousPage 
    // useEffect(() => {
    // setState(initialState);
    // fetchMovies(searchTerm, page);
    // }, [searchTerm, page]);

    // Write to sessionStorage

    useEffect(() => {
        if (page === 1 && !searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
    }, [searchTerm, state, page]);


    useEffect(() => {
        sessionStorage.setItem(page, JSON.stringify(state));
    }, [page, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setPage };
}
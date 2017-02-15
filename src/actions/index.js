import api from '../api';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const FETCH_OTHER_MOVIES_REQUEST = 'FETCH_OTHER_MOVIES_REQUEST';
export const FETCH_OTHER_MOVIES_SUCCESS = 'FETCH_OTHER_MOVIES_SUCCESS';

export const CLEAR_MOVIES = 'CLEAR_MOVIES';

export const fetchMoviesRequest = query => ({
    type: FETCH_MOVIES_REQUEST,
    query
});

export const fetchMoviesSuccess = ({ data }) => ({
    ...data,
    type: FETCH_MOVIES_SUCCESS
});

export const fetchMovieRequest = id => ({
    type: FETCH_MOVIE_REQUEST,
    id
});

export const fetchMovieSuccess = ({ data }) => ({
    movie: data,
    type: FETCH_MOVIE_SUCCESS
});

export const searchMovies = query => dispatch => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query)
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const fetchMovie = id => dispatch => {
    dispatch(fetchMovieRequest(id));

    return api.fetchMovie(id)
        .then(data => dispatch(fetchMovieSuccess(data)));
}

export const fetchPopular = () => dispatch => {
    dispatch(fetchMoviesRequest(null));

    return api.fetchPopularMovies()
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const fetchNow = () => dispatch => {
    dispatch(fetchMoviesRequest(null));

    return api.fetchNowMovies()
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const fetchTop = () => dispatch => {
    dispatch(fetchMoviesRequest(null));

    return api.fetchTopMovies()
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const clearMovies = () => ({
    type: CLEAR_MOVIES
});

export const fetchOtherMoviesRequest = () => ({
    type: FETCH_OTHER_MOVIES_REQUEST
});

export const fetchOterMoviesSuccess = ({ data }) => ({
    ...data,
    type: FETCH_OTHER_MOVIES_SUCCESS
});

export const fetchRecommendations = id => dispatch => {
    dispatch(fetchOtherMoviesRequest());

    return api.fetchRecommendationsMovies(id)
        .then(data => dispatch(fetchOterMoviesSuccess(data)));
}

export const fetchSimilar = id => dispatch => {
    dispatch(fetchOtherMoviesRequest());

    return api.fetchSimilarMovies(id)
        .then(data => dispatch(fetchOterMoviesSuccess(data)));
}

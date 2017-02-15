import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    CLEAR_MOVIES,
    FETCH_OTHER_MOVIES_REQUEST,
    FETCH_OTHER_MOVIES_SUCCESS
} from '../actions';

const movies = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };
        case CLEAR_MOVIES:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
};

const otherMovies = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_OTHER_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_OTHER_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };

        default:
            return state
    }
};

const movie = ( state = { isFetching: false, info: {} }, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                info: action.movie
            };
        default:
            return state
    }
};

export default combineReducers({ movies, movie, otherMovies, routing });

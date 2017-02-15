import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPopular } from '../actions';

import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
import Header from '../components/Header';

const styles = {
    height: '100%',
    maxWidth: 800,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    margin: '0 auto'
};

@connect(mapStateToProps, ({ fetchPopular }))
export default class Popular extends Component {
    static propTypes = {
        fetchRecommendations: PropTypes.func,
        loading: PropTypes.bool,
        movies: PropTypes.array,
    };

    componentDidMount() {
        this.props.fetchPopular()
    }

    render() {
        return (
            <div>
                <Header>Популярные фильмы</Header>
                <div style={styles}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.movies} />
                    </Loader>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching
    };
}

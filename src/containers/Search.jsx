import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchMovies, clearMovies } from '../actions';

import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

@withRouter
@connect(
    mapStateToProps,
    { searchMovies, clearMovies }
)
export default class Search extends Component {
    componentWillMount() {
        const { search, searchMovies, clearMovies, movies } = this.props;

        if (search) {
            searchMovies(search);
        } else if (movies.length){
            clearMovies();
        }
    }

    handleSearch = search => {
        const { location, router } = this.props;

        router.push({
            pathname: location.pathname,
            query: { ...location.query, search }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }

    render() {
        return (
            <div>
                <SearchBox search={this.props.search} onSearch={this.handleSearch} />
                <div style={styles.container}>
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
        loading: state.movies.isFetching,
        search: ownProps.location.query.search
    };
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchRecommendations } from '../actions';

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

@connect(mapStateToProps, ({ fetchRecommendations }))
export default class MovieRecommendations extends Component {
    static propTypes = {
        fetchRecommendations: PropTypes.func,
        loading: PropTypes.bool,
        movies: PropTypes.array,
        params: PropTypes.object
    };

    componentDidMount() {
        const { params: { id }, fetchRecommendations, loading } = this.props;
        if (!loading) {
            fetchRecommendations(id)
        }

    }

    render() {
        return (
            <div>
                <Header>
                    Рекомендации
                    <Link to={`/movies/${this.props.params.id}/similar`}>Похожие</Link>
                </Header>
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
        movies: state.otherMovies.items,
        loading: state.otherMovies.isFetching,
    };
}

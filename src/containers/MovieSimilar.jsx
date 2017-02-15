import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchSimilar } from '../actions';

import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
import Header from '../components/Header';

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

@connect(mapStateToProps, ({ fetchSimilar }))
class MovieSimilar extends Component {
    componentDidMount() {
        const { params: { id }, fetchSimilar, loading } = this.props;
        if (!loading) {
            fetchSimilar(id)
        }
    }

    render() {
        return (
            <div>
                <Header>
                    <Link to={`/movies/${this.props.params.id}/recommendations`}>Рекомендации</Link>
                    Похожие
                </Header>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.movies} />
                    </Loader>
                </div>
            </div>
        );
    }
}

export default MovieSimilar;

function mapStateToProps(state, ownProps) {
    return {
        movies: state.otherMovies.items,
        loading: state.otherMovies.isFetching,
    };
}

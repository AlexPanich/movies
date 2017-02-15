import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNow } from '../actions';

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

@connect(mapStateToProps, ({ fetchNow }))
class Now extends Component {
    componentDidMount() {
        this.props.fetchNow()
    }

    render() {
        return (
            <div>
                <Header>Сейчас в кино</Header>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.movies} />
                    </Loader>
                </div>
            </div>
        );
    }
}

export default Now;

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching
    };
}

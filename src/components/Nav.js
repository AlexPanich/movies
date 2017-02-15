import React from 'react';
import { Link } from 'react-router';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    link: {
        padding: '16px 24px',
        fontSize: '32px',
        textDecoration: 'none',
        color: '#000'
    },
    active: {
        backgroundColor: '#BDBDBD'
    }
};

export default () => (
    <nav style={styles.container}>
        <Link to="/movies" style={styles.link} activeStyle={styles.active}>Поиск</Link>
        <Link to="/popular" style={styles.link} activeStyle={styles.active}>Популярные</Link>
        <Link to="/top" style={styles.link} activeStyle={styles.active}>Топ Лучших</Link>
        <Link to="/now" style={styles.link} activeStyle={styles.active}>Сейчас в Кино</Link>
    </nav>
);

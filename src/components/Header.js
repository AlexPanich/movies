import React from 'react';

const styles = {
    container: {
        width: '100%',
        textAlign: 'center',
        padding: '16px 16px',
        fontSize: '32px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
    }
};

export default (props) => (
    <div style={styles.container}>
        {props.children}
    </div>
);

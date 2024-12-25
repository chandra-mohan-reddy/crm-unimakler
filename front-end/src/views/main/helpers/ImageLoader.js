import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const ImageLoader = () => {
    return (
        <div style={styles.container}>
            <div style={styles.spinnerContainer}>
                <div style={styles.loader}>
                    <img
                        alt="..."
                        // className="avatar rounded-circle"
                        style={styles.image}
                        src={require("assets/img/brand/uni-logo.png")}
                    />
                </div>
            </div>
            {/* <Spinner animation="border" variant="info" style={{ marginLeft: '5px' }} /> */}
            <Spinner animation="grow" variant="info" style={{ marginLeft: '5px', marginTop: '10px' }} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0,
    },
    loader: {
        display: 'inline-block',
        overflow: 'hidden',
    },
    image: {
        height: '50px', // Adjust the width as needed
        width: 'auto',
        animation: 'rotate 2s linear infinite',
    },
    spinnerContainer: {
        textAlign: 'center',
    },
};

export default ImageLoader;

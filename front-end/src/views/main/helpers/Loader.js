//https://www.davidhu.io/react-spinners/storybook/?path=/docs/pulseloader--main
//https://www.npmjs.com/package/react-spinners
import RingLoader from "react-spinners/RingLoader";

function Loader() {
    return (
        <div style={styles.container}>
            <div style={styles.spinnerContainer}>
                <RingLoader color="#36d7b7" />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0,
    },
    spinnerContainer: {
        textAlign: 'center',
        // Add any additional styles for the spinner animation here
    },
};

export default Loader;
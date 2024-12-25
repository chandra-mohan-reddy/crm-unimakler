//https://www.davidhu.io/react-spinners/storybook/?path=/docs/pulseloader--main
//https://www.npmjs.com/package/react-spinners
import PulseLoader from "react-spinners/PulseLoader";

function LoaderHorizontal() {
    return (
        <div style={styles.container}>
            <PulseLoader color="#11CDEF" />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px'
    }
};

export default LoaderHorizontal;
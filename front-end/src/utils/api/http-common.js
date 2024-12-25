import axios from "axios";

const apiUrls = new Array();
apiUrls['auth'] = 'http://127.0.0.1:8000/api/';
apiUrls['project'] = 'http://127.0.0.1:8001/api/';
apiUrls['master'] = 'http://127.0.0.1:8002/api/';
apiUrls['user'] = 'http://127.0.0.1:8003/api/';

const httpAxi = (apiUrl) => {
    const url = `${apiUrls[apiUrl]}`;
    return axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json",
        }
    })
};

export default httpAxi;
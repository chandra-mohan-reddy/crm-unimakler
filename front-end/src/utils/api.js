import axios from 'axios';

const apiUrls = new Array();
apiUrls['auth'] = 'http://127.0.0.1:8000/api/';
apiUrls['project'] = 'http://127.0.0.1:8001/api/';
apiUrls['master'] = 'http://127.0.0.1:8002/api/';
apiUrls['user'] = 'http://127.0.0.1:8002/api/';

const apiRequest = async (route, method = 'GET', data = null, apiUrl) => {
    const url = `${apiUrls[apiUrl]}/${route}`;

    try {
        const config = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ''
            },
            data,
        };

        const response = await axios(url, config);
        return response.data;
    } catch (error) {
        console.error('API request error:', error.message);
        throw error;
    }
};

export default apiRequest;

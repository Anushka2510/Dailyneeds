
import ApiService from '../../../helpers/ApiService';

const VERSION_REST_API_URL = 'http://localhost:8080/version';
export default {

    getVersion: async () => {
        const response = await ApiService.get(VERSION_REST_API_URL);

        return response.data;
    },
}



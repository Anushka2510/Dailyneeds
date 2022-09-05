import ApiService from '../../../helpers/ApiService';

const VERSION_REST_API_URL = 'http://localhost:8080/price_list';
export default {

    getMenulist: async () => {
        const response = await ApiService.get(VERSION_REST_API_URL);
        // console.log(response);
        return response;
    },
}
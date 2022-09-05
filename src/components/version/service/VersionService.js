
import ApiService from '../../../helpers/ApiService';
export default {

    getVersion: async () => {
        const response = await ApiService.get('version');

        return response.data;
    },
}



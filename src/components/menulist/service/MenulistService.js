import ApiService from '../../../helpers/ApiService';
export default {

    getMenulist: async () => {
        const response = await ApiService.get('price_list');
        // console.log(response);
        return response;
    },
}
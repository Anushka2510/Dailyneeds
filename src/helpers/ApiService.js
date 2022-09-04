import axios from 'axios';

export default {
    get: async (path) => {
       return axios.get(path);
    },
};
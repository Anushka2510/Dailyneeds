import axios from 'axios';
import {urls} from "../config/env-config";

const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response && err.response.status === 500) {
            window.location.assign("/error");
            console.log(err)

        } else {
            throw err;
        }
    });
};
export default {
    get: async (path) => {
       return promiseWithErrorHandling(axios.get(`${urls.service}/${path}`));
    },
    post: async (path, payload) => {
        return promiseWithErrorHandling(axios.post(`${urls.service}/${path}`, payload));
    },
    delete: async(path,payload)=>{
        return axios.delete(`${urls.service}/${path}`,payload);
    }

};
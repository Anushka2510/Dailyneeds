import ApiService from '../../../helpers/ApiService';
export default {

    create: async (payload) => {
      return await ApiService.post("CartItems", payload);
    },
    getCartdata: async () => {
        const response = await ApiService.get("CartItems");
        return response;
      
    },
    remove: async()=>{
        return await ApiService.delete("CartItems");
    }
}
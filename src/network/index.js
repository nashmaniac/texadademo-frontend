import axios from 'axios';
console.log(process.env.VUE_APP_API_SERVER);
const api  = axios.create({
    baseURL: process.env.VUE_APP_API_SERVER
});
export default api;

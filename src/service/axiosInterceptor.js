import axios from 'axios';

const url = process.env.BASE_API;
const token = localStorage.getItem('token');
console.log(token);
console.log(url);
export const axiosInterceptor = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
        'Authorization': `bearer ${token}`,
    },
});
// untuk pemanggilan nya seperti yang di boilerPlate dokter
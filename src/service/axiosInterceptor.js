import axios from 'axios';

const url = process.env.BASE_API;
const token = localStorage.getItem('token');
export const axiosInterceptor = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'multipart/form-data',

    },
});
// untuk pemanggilan nya seperti yang di boilerPlate dokter
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-mern-backend0501.herokuapp.com/",
});

export default instance

import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params : {
        api_key : "d52431d1921054f3487fc2189b7b3e40" ,
    }
    
});

export default axiosInstance ;
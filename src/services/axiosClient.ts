import axios from 'axios';
const BASE_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    params: {
        format: 'json',
        nojsoncallback: 1,
    },
});
export default axiosClient;
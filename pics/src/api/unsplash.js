import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nFCPqUcDq72q_bmj-qN5-XcRuP1nzbadnVyuiDmYOa0'
    }
});
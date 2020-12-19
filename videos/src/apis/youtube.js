import axios from 'axios';

const KEY = 'AIzaSyCrnCA94wVDRZgyb-QxvFnLHC7kEV7STpM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
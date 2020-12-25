import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'I feel it coming', duration: '4:05'},
        { title: 'Blinding Lights', duration: '2:30'},
        { title: 'Alone Again', duration: '3:30'},
        { title: 'In your eyes', duration: '2:50'},
    ];
};
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})


import {
    combineReducers
} from 'redux';

const songReducer = () => {
    return [{
            title: 'No Scrubs',
            duration: '4:20'
        },
        {
            title: 'Lose yourself',
            duration: '5:10'
        },
        {
            title: 'All Star',
            duration: '2:30'
        },
        {
            title: 'Rap God',
            duration: '2:30'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
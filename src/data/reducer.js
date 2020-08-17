export const initialState = {
    user: null,
    playing: false,
    item: null,
    my_playlists: [],
    // just to debug !! REMOVE after finished developing...
    // token: "BQBKP4XtJLA0tQQJyYO9RkKw_IgZzOFa2yXHNOx4GjH92B44q4BLiunjh47mAHW4CNN-d4HErx3KN-1CGbwgtqFag0_MVTobqeC6ebcb-RL-MVwYZmEh5TQ7_b-OBJ57rZRflb87xsKz9WJ3DnhAgE-pu9ZG8Q"
};

export const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_MY_PLAYLIST_ITEM':
            return {
                ...state,
                my_playlists: [...state.my_playlists, action.playlist_item]
            }
        default:
            return state;
    };
};

export default reducer;
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // just to debug !! REMOVE after finished developing...
    //token: null,
        token: "BQBKP4XtJLA0tQQJyYO9RkKw_IgZzOFa2yXHNOx4GjH92B44q4BLiunjh47mAHW4CNN-d4HErx3KN-1CGbwgtqFag0_MVTobqeC6ebcb-RL-MVwYZmEh5TQ7_b-OBJ57rZRflb87xsKz9WJ3DnhAgE-pu9ZG8Q"
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
        default:
            return state;
    };
};

export default reducer;
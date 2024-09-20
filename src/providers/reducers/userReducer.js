const initialState = {
    userDetails: null,
    loading: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.payload,
                loading: false,
            };
        case 'CLEAR_USER_DETAILS':
            return {
                ...state,
                userDetails: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;

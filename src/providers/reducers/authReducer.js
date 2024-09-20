const initialState = {
    isAuthenticated: false,
    token: null,
    loading: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducer;

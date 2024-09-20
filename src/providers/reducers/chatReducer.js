const initialState = {
    messages: [],
    loading: true,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload,
                loading: false,
            };
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case 'CLEAR_MESSAGES':
            return {
                ...state,
                messages: [],
            };
        default:
            return state;
    }
};

export default chatReducer;

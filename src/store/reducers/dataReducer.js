const initialState = {
    user: {},
    repos: [],
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USER": {
            return {
                ...state,
                user: action.payload,
            };
        };

        case "FETCH_REPOS": {
            return {
                ...state,
                repos: action.payload,
            };
        };

        default:
            return state;
    };
};
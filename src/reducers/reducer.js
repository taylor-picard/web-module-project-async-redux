import { FETCH_US_DATA, FETCH_US_DATA_START, FETCH_US_DATA_SUCCESS, FETCH_US_DATA_FAIL } from "../actions/actions";

const initialState = {
    data: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action){
    switch(action.type) {
        case FETCH_US_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_US_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case FETCH_US_DATA_FAIL: 
            return {
                ...state,
                error: action.payload
            };
        case FETCH_US_DATA:
            return {
                ...state,
                error: 'Action file needs building!'
            };
        default:
            return state;
    }
}

export default reducer;
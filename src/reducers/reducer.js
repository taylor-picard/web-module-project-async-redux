import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions/actions";

const initialState = {
    data: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action){
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
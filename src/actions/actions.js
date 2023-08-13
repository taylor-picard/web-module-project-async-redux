import axios from "axios";
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const getFacts = () => {
    return(dispatch => {
        dispatch(fetchStart());
        axios.get('https://catfact.ninja/fact')
            .then(res => {
                console.log(res.data.fact);
                dispatch(fetchSuccess(res.data.fact));
            })
    })
}

export const fetchStart = () => {
    return({type: FETCH_DATA_START});
}
export const fetchSuccess = (data) => {
    return({type: FETCH_DATA_SUCCESS, payload:data});
}
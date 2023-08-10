import axios from "axios";

export const FETCH_US_DATA = 'FETCH_US_DATA';
export const FETCH_US_DATA_START = 'FETCH_US_DATA_START';
export const FETCH_US_DATA_SUCCESS = 'FETCH_US_DATA_SUCCESS';
export const FETCH_US_DATA_FAIL = 'FETCH_US_DATA_FAIL';

export const getUSData = () => {
    return(dispatch => {
        dispatch(fetchStart());
        axios
        .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(res => {
            dispatch(fetchSuccess(res.data))
        })
        .catch(err => dispatch({type: FETCH_US_DATA_FAIL, payload: err}));
    });
};

export const fetchStart = () => {
    return({type: FETCH_US_DATA_START});
}

export const fetchSuccess = (data) => {
    return({type: FETCH_US_DATA_SUCCESS, payload:data});
}
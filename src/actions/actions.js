
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchStart = () => {
    return({type: FETCH_DATA_START});
}
export const fetchSuccess = (data) => {
    return({type: FETCH_DATA_SUCCESS, payload:data});
}
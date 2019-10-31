import { GET_CRYPTOCURRENCY_LIST, LOADING_CRYPTOCURRENCY_LIST } from "./actionTypes";
import cryptoCurrencyList from '../api-30-p1-byname-asc';

export const getCryptoCurrencyList = (cryptoCurrencyList) => ({
    type: GET_CRYPTOCURRENCY_LIST,
    cryptoCurrencyList,
});

export const cryptoCurrencyListLoader = (cryptoCurrencyListLoader) => ({
    type: LOADING_CRYPTOCURRENCY_LIST,
    cryptoCurrencyListLoader,
});

export const fecthCryptoCurrencyList = (dispatch, qs) => {
    return async () => {
        dispatch(cryptoCurrencyListLoader(true));
        let cryptoCurrencyListRes;
        // const res = await fetch(`/authors`);
        // const authors = await res.json();
        setTimeout(() => {
            cryptoCurrencyListRes = cryptoCurrencyList;
            dispatch(cryptoCurrencyListLoader(false));
            dispatch(getCryptoCurrencyList(cryptoCurrencyListRes.data));
        }, 2000);
    };
};

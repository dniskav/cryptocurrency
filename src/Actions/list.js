import { GET_CRYPTOCURRENCY_LIST, LOADING_CRYPTOCURRENCY_LIST } from "./actionTypes";
import cryptoCurrencyList from '../api-30-p1-byname-asc';
import axios from 'axios';

const useServer = true;

const fixCorsProxy = 'https://cors-anywhere.herokuapp.com/';

export const getCryptoCurrencyList = (cryptoCurrencyList) => ({
    type: GET_CRYPTOCURRENCY_LIST,
    cryptoCurrencyList,
});

export const cryptoCurrencyListLoader = (cryptoCurrencyListLoader) => ({
    type: LOADING_CRYPTOCURRENCY_LIST,
    cryptoCurrencyListLoader,
});

export const fecthCryptoCurrencyList = (dispatch) => {
    return async (dispatch, getState) => {
        dispatch(cryptoCurrencyListLoader(true));
        const state = getState();
        if(useServer) {
            const query = `${fixCorsProxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&convert=USD&sort=${state.sortBy}&sort_dir=${state.sortDirection}`;
            const cryptoCurrencyListRes = await axios(query, {
                method: 'GET',
                headers: {
                        'X-CMC_PRO_API_KEY': 'dea3222b-1178-474f-81be-753b9a75f635',
                    }
                });
            dispatch(cryptoCurrencyListLoader(false));
            dispatch(getCryptoCurrencyList(cryptoCurrencyListRes.data.data));
        } else {
            setTimeout(() => {
                dispatch(cryptoCurrencyListLoader(false));
                dispatch(getCryptoCurrencyList(cryptoCurrencyList.data));
            }, 2000);
        }
    };
};

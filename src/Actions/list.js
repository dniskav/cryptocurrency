import { GET_CRYPTOCURRENCY_LIST, LOADING_CRYPTOCURRENCY_LIST } from "./actionTypes";
import cryptoCurrencyList from '../api-30-p1-byname-asc';
import { message } from 'antd';
import axios from 'axios';

const API_KEY = process.env['REACT_APP_X-CMC_PRO_API_KEY'];

const useServer = false;

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
            try {
                const cryptoCurrencyListRes = await axios(query, {
                    method: 'GET',
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    }
                });
                dispatch(getCryptoCurrencyList(cryptoCurrencyListRes.data.data));
            } catch (err) {
                message.error(`😢 ${err}`, 5);
            } finally {
                dispatch(cryptoCurrencyListLoader(false));
            }
        } else {
            setTimeout(() => {
                dispatch(cryptoCurrencyListLoader(false));
                dispatch(getCryptoCurrencyList(cryptoCurrencyList.data));
            }, 2000);
        }
    };
};

import { GET_CRYPTOCURRENCY_DETAILS, LOADING_CRYPTOCURRENCY_DETAILS } from "./actionTypes";
import { message } from 'antd';
import axios from 'axios';

const API_KEY = process.env['REACT_APP_X-CMC_PRO_API_KEY'];

const useServer = false;

const fixCorsProxy = 'https://cors-anywhere.herokuapp.com/';

export const getCryptoCurrencyDetails = (cryptoCurrencyDetails) => ({
    type: GET_CRYPTOCURRENCY_DETAILS,
    cryptoCurrencyDetails,
});

export const cryptoCurrencyDetailsLoader = (cryptoCurrencyDetailsLoader) => ({
    type: LOADING_CRYPTOCURRENCY_DETAILS,
    cryptoCurrencyDetailsLoader,
});

export const fecthCryptoCurrencyDetails = (dispatch, id) => {
    return async (dispatch, getState) => {
        dispatch(cryptoCurrencyDetailsLoader(true));
        const state = getState();
        const query = `${fixCorsProxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}`;
        try {
            const cryptoCurrencyDetailsRes = await axios(query, {
                method: 'GET',
                headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    }
                });
                dispatch(getCryptoCurrencyDetails(cryptoCurrencyDetailsRes.data.data[id]));
        } catch (err) {
            message.error(`😢 ${err}`, 5);
        } finally {
            dispatch(cryptoCurrencyDetailsLoader(false));
        }
    };
};

import { GET_CRYPTOCURRENCY_DETAILS, LOADING_CRYPTOCURRENCY_DETAILS } from "./actionTypes";
import cryptoCurrencyDetails from '../detail-api-2837';
import axios from 'axios';

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
        if(useServer) {
            const query = `${fixCorsProxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}`;
            const cryptoCurrencyDetailsRes = await axios(query, {
                method: 'GET',
                headers: {
                        'X-CMC_PRO_API_KEY': 'dea3222b-1178-474f-81be-753b9a75f635',
                    }
                });
            dispatch(cryptoCurrencyDetailsLoader(false));
            dispatch(getCryptoCurrencyDetails(cryptoCurrencyDetailsRes.data.data[id]));
        } else {
            setTimeout(() => {
                dispatch(cryptoCurrencyDetailsLoader(false));
                dispatch(getCryptoCurrencyDetails(cryptoCurrencyDetails.data[id]));
            }, 2000);
        }
    };
};

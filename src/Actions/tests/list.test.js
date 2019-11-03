import 'babel-polyfill';
import { fecthCryptoCurrencyList } from '../list';
import axios from 'axios';

beforeEach(() => {
    jest.resetModules();
});

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('Action List', () => {
    it('fecthCryptoCurrencyList should show a loader when the fetch starts', () => {
        const dispatch = jest.fn();
        const loaderShowAction = {cryptoCurrencyListLoader: true, type: 'LOADING_CRYPTOCURRENCY_LIST'}; 
        const getState = () => ({
            sortBy: 'symbol',
            sortDirection: 'desc',
        });
        fecthCryptoCurrencyList()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(loaderShowAction);
    });
    it('fecthCryptoCurrencyList should hide a loader when the fetch ends', () => {
        const dispatch = jest.fn();
        const loaderHideAction = {cryptoCurrencyListLoader: false, type: 'LOADING_CRYPTOCURRENCY_LIST'}; 
        const getState = () => ({
            sortBy: 'symbol',
            sortDirection: 'desc',
        });
        fecthCryptoCurrencyList()(dispatch, getState)
            .finally(res => {
                expect(dispatch).toHaveBeenCalledWith(loaderHideAction);
            });
    });
    it('fecthCryptoCurrencyList should dispatch getCryptoCurrencyList when resolve', async () => {
        const dispatch = jest.fn();
        const query = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&convert=USD&sort=symbol&sort_dir=desc';
        const headers = {
            "headers": {
                "X-CMC_PRO_API_KEY": undefined,
            },
        };
        const getState = () => ({
            sortBy: 'symbol',
            sortDirection: 'desc',
        });
        await fecthCryptoCurrencyList()(dispatch, getState);
        expect(axios.get).toHaveBeenCalledWith(query, headers);
    });
});

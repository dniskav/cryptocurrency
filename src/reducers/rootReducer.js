import { initialState } from './initialState';
import { GET_CRYPTOCURRENCY_LIST, LOADING_CRYPTOCURRENCY_LIST, SORT_DIRECTION } from '../Actions/actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTOCURRENCY_LIST:
            const { cryptoCurrencyList } = action;
            return { ...state, cryptoCurrencyList };
        case LOADING_CRYPTOCURRENCY_LIST:
            const { cryptoCurrencyListLoader } = action;
            return { ...state, cryptoCurrencyListLoader };
        case SORT_DIRECTION:
            const { sortBy } = action;
            return { ...state, sortBy };
        default:
            return state;
    }
};

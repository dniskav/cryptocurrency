import { initialState } from './initialState';
import { GET_CRYPTOCURRENCY_LIST, LOADING_CRYPTOCURRENCY_LIST, SORT_DIRECTION, SORT_BY } from '../Actions/actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTOCURRENCY_LIST:
            const { cryptoCurrencyList } = action;
            return { ...state, cryptoCurrencyList };
        case LOADING_CRYPTOCURRENCY_LIST:
            const { cryptoCurrencyListLoader } = action;
            return { ...state, cryptoCurrencyListLoader };
        case SORT_BY:
            const { sortBy } = action;
            return { ...state, sortBy };
        case SORT_DIRECTION:
            const { sortDirection } = action;
            return { ...state, sortDirection };
        default:
            return state;
    }
};

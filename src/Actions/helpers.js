import { SORT_DIRECTION, SORT_BY, SET_NAV_URL } from './actionTypes';
import { fecthCryptoCurrencyList } from './list';

export const setNavUrl = (currentRoute) => ({
    type: SET_NAV_URL,
    currentRoute,
});

export const sortDirection = (sortDirection) => ({
    type: SORT_DIRECTION,
    sortDirection,
});

export const sortBy = (sortBy) => ({
    type: SORT_BY,
    sortBy,
});

export const sortDirectionFetch = (direction) => {
    return async (dispatch) => {
        await dispatch(sortDirection(direction));
        dispatch(fecthCryptoCurrencyList(dispatch));
    };
};

export const sortByFetch = (by) => {
    return async (dispatch) => {
        await dispatch(sortBy(by));
        dispatch(fecthCryptoCurrencyList(dispatch));
    };
};

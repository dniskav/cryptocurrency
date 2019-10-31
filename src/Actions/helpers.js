import { SORT_DIRECTION, SORT_BY } from './actionTypes';
import { fecthCryptoCurrencyList } from './list';

export const sortDirection = (sortDirection) => ({
    type: SORT_DIRECTION,
    sortDirection,
});

export const sortBy = (sortBy) => ({
    type: SORT_BY,
    sortBy,
});

export const sortDirectionFetch = (dispatch, direction) => {
    return async () =>{
        await dispatch(sortDirection(direction));
        dispatch(fecthCryptoCurrencyList(dispatch));
    };
};

export const sortByFetch = (dispatch, by) => {
    return async () =>{
        await dispatch(sortBy(by));
        dispatch(fecthCryptoCurrencyList(dispatch));
    };
};

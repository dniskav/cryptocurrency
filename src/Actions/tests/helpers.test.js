import 'babel-polyfill';
import { sortDirectionFetch, sortByFetch } from '../../Actions/helpers';

describe('Actions Helpers', () => {
    it('sortDirectionFetch should dispatch sortDirection', () => {
        const dispatch = jest.fn();
        const sortDirectionAction = {sortDirection: 'desc', type: 'SORT_DIRECTION'};
        sortDirectionFetch('desc')(dispatch)
            .then(res => {
                expect(dispatch).toHaveBeenCalledWith(sortDirectionAction);
            });
    });
    it('sortDirectionFetch should dispatch sortDirection', () => {
        const dispatch = jest.fn();
        const sortByAction = {sortBy: 'symbol', type: 'SORT_BY'};
        sortByFetch('symbol')(dispatch)
            .then(res => {
                expect(dispatch).toHaveBeenCalledWith(sortByAction);
            });
    });
});

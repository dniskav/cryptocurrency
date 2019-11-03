import React from 'react';
import 'babel-polyfill';
import { sortDirectionFetch, sortByFetch } from '../../Actions/helpers';
import expectExport from 'expect';

describe('Helpers', () => {
    it('sortDirectionFetch should dispatch sortDirection', () => {
        const dispatch = jest.fn();
        const ssortDirectionAction = {sortDirection: 'desc', type: 'SORT_DIRECTION'};
        sortDirectionFetch('desc')(dispatch)
            .then(res => {
                expect(dispatch).toHaveBeenCalledWith(ssortDirectionAction);
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

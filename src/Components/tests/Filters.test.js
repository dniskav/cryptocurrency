import React from 'react';
import 'babel-polyfill';
import { sortDirectionFetch, sortByFetch } from '../../Actions/helpers';
import { shallow } from 'enzyme';
import { Select } from 'antd';
import Filters from '../Filters';

beforeEach(() => {
    jest.resetModules();
});

jest.mock('../../Actions/helpers');

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn({
        currentRoute: '/',
    })),
}));

describe('<Filters />', () => {
    it('Should show selectors when the show param is true', () => {
        const props = { show: true };
        const tree = shallow(<Filters {...props} />);
        expect(tree.find(Select).exists()).toBe(true);
    });
    it('Should hide selectors when the show param is false', () => {
        const props = { show: false };
        const tree = shallow(<Filters {...props} />);
        expect(tree.find(Select).exists()).toBe(false);
    });
    it('Selector direction should dispatch sortDirectionFetch when is changed', () => {
        const props = { show: true };   
        const tree = shallow(<Filters {...props} />);
        const event = {name: 'sortDirection', value: 'desc' };
        const sortDirectionFilter = tree.find('#sortDirection');
        sortDirectionFilter.simulate('change', event);
        expect(sortDirectionFetch).toHaveBeenCalledWith(event);
    });
    it('Selector sotBy should dispatch sortByFetch when is changed', () => {
        const props = { show: true };   
        const tree = shallow(<Filters {...props} />);
        const event = {name: 'sortBy', value: 'symbol' };
        const sortbyFilter = tree.find('#sortBy');
        sortbyFilter.simulate('change', event);
        expect(sortByFetch).toHaveBeenCalledWith(event);
    });
});

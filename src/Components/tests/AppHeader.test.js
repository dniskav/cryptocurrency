import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from 'antd';
import AppHeader from '../AppHeader';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        currentRoute: '/',
    })),
  }));

describe('<AppHeader />', () => {
    it('AppHeader should has tests', () => {
        const tree = shallow(<AppHeader />);
        expect(tree.find(PageHeader).exists()).toBe(true);
    });
});

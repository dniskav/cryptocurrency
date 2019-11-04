import React from 'react';
import { shallow } from 'enzyme';
import { Descriptions, Badge } from 'antd';
import FormatDetails from '../FormatDetails';

describe('<FormatDetails />', () => {
    it('should show a No data available message if data prop is empty', () => {
        const dataProps = {};
        const tree = shallow(<FormatDetails data={dataProps} />);
        const descriptions = tree.find(Descriptions);
        expect(tree.text()).toBe('No data available');
        expect(descriptions.exists()).toBe(false);
    });
    it('should find Descriptions component if data prop is filled', () => {
        const dataProps = {tags: [], platform: {}, quote: { USD:{} } };
        const tree = shallow(<FormatDetails data={dataProps} />);
        const descriptions = tree.find(Descriptions);
        expect(descriptions.exists()).toBe(true);
    });
    it('should show tags if data.tags array prop is filled', () => {
        const dataProps = {tags: ['mineable'], platform: {}, quote: { USD:{} } };
        const tree = shallow(<FormatDetails data={dataProps} />);
        const badge = tree.find(Badge);
        expect(badge.exists()).toBe(true);
    });
});

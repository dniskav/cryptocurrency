import React from 'react';
import { Select, Typography } from 'antd';
import { sortDirectionFetch, sortByFetch } from '../Actions/helpers';
import { useSelector, useDispatch } from 'react-redux';

const Filters = ({ show }) => {
    const { Text } = Typography;
    const { Option } = Select;
    const dispatch = useDispatch();
    const direction = useSelector( state => state.sortDirection);

    const sortDirectionChange = (direction) => {
        dispatch(sortDirectionFetch(direction));
    };

    const sortByChange = (sortBy) => {
        dispatch(sortByFetch(sortBy));
    };

    return (
        <div className="filters">
            {show ? 
            <>
            <div key="direction">
                <Text>Sort Direction</Text>
                <Select id="sortDirection" defaultValue={direction} style={{ width: 120 }} onChange={sortDirectionChange}>
                    <Option value="asc">Asc</Option>
                    <Option value="desc">Desc</Option>
                </Select>
            </div>
            <div key="sortBy">
                <Text>Sort By</Text>
                <Select id="sortBy" defaultValue="name" style={{ width: 120 }} onChange={sortByChange}>
                    <Option value="name">Name</Option>
                    <Option value="symbol">Symbol</Option>
                    <Option value="market_cap">Market Cap</Option>
                    <Option value="price">Price</Option>
                </Select>
            </div>
            </>
            : 
            <></>
            }
        </div>
    )
};

export default Filters;

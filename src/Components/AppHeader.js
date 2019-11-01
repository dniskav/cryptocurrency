import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Typography, PageHeader } from 'antd';
import { useLocation } from 'react-router-dom';
import { sortDirectionFetch, sortByFetch } from '../Actions/helpers';

const Filters = ({ show }) => {
    const { Text } = Typography;
    const { Option } = Select;
    const dispatch = useDispatch();
    const direction = useSelector( state => state.sortDirection);

    const sortDirectionChange = (direction) => {
        dispatch(sortDirectionFetch(dispatch, direction));
    };

    const sortByChange = (sortBy) => {
        dispatch(sortByFetch(dispatch, sortBy));
    };

    return (
        <div className="filters">
            {show ? 
            <>
            <div key="direction">
                <Text>Sort Direction</Text>
                <Select defaultValue={direction} style={{ width: 120 }} onChange={sortDirectionChange}>
                    <Option value="asc">Asc</Option>
                    <Option value="desc">Desc</Option>
                </Select>
            </div>
            <div key="sortBy">
                <Text>Sort By</Text>
                <Select defaultValue="name" style={{ width: 120 }} onChange={sortByChange}>
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

const AppHeader = () => {
    let location;

    useEffect(() => {
        location = window.location;
        console.log(location)
    });

    return (
    <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Cryptocurrency"
        extra={<Filters show={true} />}
    >
    </PageHeader>
)};

export default AppHeader;

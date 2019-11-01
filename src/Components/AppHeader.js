import React from 'react';
import { useSelector } from 'react-redux';
import { PageHeader } from 'antd';
import Filters from './Filters';

const AppHeader = () => {
    const showFilters = useSelector(state => state.currentRoute);

    return (
    <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Cryptocurrency"
        extra={<Filters show={showFilters === '/'} />}
    >
    </PageHeader>
)};

export default AppHeader;

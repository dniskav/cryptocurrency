import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { fecthCryptoCurrencyList } from '../Actions/list';

const dataMapper = (list) => {
    return list.map( cryptocurrency => ({
        key: cryptocurrency.id,
        name: cryptocurrency.name,
        symbol: cryptocurrency.symbol,
        market_cap: cryptocurrency.quote ? cryptocurrency.quote.USD.market_cap : '',
        price: cryptocurrency.quote ? cryptocurrency.quote.USD.price : '',
    }));
};

const Listing = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Symbol',
          dataIndex: 'symbol',
          key: 'symbol',
        },
        {
          title: 'Market Cap',
          dataIndex: 'market_cap',
          key: 'market_cap',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch(); 
    const tableList = useSelector( state => state.cryptoCurrencyList);
    const loadingData = useSelector( state => state.cryptoCurrencyListLoader);

    const handleTableChange = pagination => setCurrentPage(pagination.current);

    useEffect(() => {
        dispatch(fecthCryptoCurrencyList(dispatch));
    }, []);

    useEffect(() => {
      setCurrentPage(1);
    }, [tableList]);

    return(
        <>
            <Table
                columns={columns}
                dataSource={dataMapper(tableList)}
                onChange={handleTableChange}
                pagination={{
                  pageSize: 30,
                  current: currentPage,
                }}
                loading={loadingData}
                size="small"
            >
            </Table>
        </>
    )
};

export default Listing;

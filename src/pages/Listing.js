import React, { useEffect } from 'react';
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

const handleTableChange = (pagination, filters, sorter) => {console.log(pagination, filters, sorter)};

const Listing = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        //   sorter: (a, b) => a.name.localeCompare(b.name),
          key: 'name',
        },
        {
          title: 'Symbol',
          dataIndex: 'symbol',
        //   sorter: (a, b) => a.symbol.localeCompare(b.symbol),
          key: 'symbol',
        },
        {
          title: 'Market Cap',
          dataIndex: 'market_cap',
        //   sorter: (a, b) => a.market_cap - b.market_cap,
          key: 'market_cap',
        },
        {
          title: 'Price',
          dataIndex: 'price',
        //   sorter: (a, b) => a.price - b.price,
          key: 'price',
        },
      ];
    
    const dispatch = useDispatch();
    const tableList = useSelector( state => state.cryptoCurrencyList);
    const loadingData = useSelector( state => state.cryptoCurrencyListLoader);

    useEffect(() => {
        dispatch(fecthCryptoCurrencyList(dispatch));
    }, []);

    return(
        <>
            <Table
                columns={columns}
                dataSource={dataMapper(tableList)}
                onChange={handleTableChange}
                pagination={{ pageSize: 30 }}
                loading={loadingData}
                size="small"
            >
            </Table>
        </>
    )
};

export default Listing;

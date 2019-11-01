import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Skeleton, Descriptions, Badge } from 'antd';
import { useLocation } from 'react-router-dom';
import { fecthCryptoCurrencyDetails } from '../Actions/details';
import { setNavUrl } from '../Actions/helpers';

const DetailFormatted = ({ data = {}}) => {
    if(Object.keys(data).length === 0 ) {
        return (<>No data available</>);
    } else {
        return (
            <>
            <Descriptions title="OxBitcoin" bordered>
                <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
                <Descriptions.Item label="Symbol">{data.symbol}</Descriptions.Item>
                <Descriptions.Item label="Slug">{data.slug}</Descriptions.Item>
                <Descriptions.Item label="Num Market Pairs">{data.num_market_pairs}</Descriptions.Item>
                <Descriptions.Item label="Date Added">{new Date(data.date_added).toLocaleDateString()}</Descriptions.Item>
                {data.tags.length &&
                    data.tags.map(tag => (
                        <Descriptions.Item label={tag} key={tag}>
                            <Badge status="success" text="True" />
                        </Descriptions.Item>
                    ))
                }
                <Descriptions.Item label="Max Supply">{data.max_supply}</Descriptions.Item>
                <Descriptions.Item label="Circulating Supply">{data.circulating_supply}</Descriptions.Item>
                <Descriptions.Item label="Total Supply">{data.total_supply}</Descriptions.Item>
                <Descriptions.Item label="Cmc Rank">{data.cmc_rank}</Descriptions.Item>
                <Descriptions.Item label="Last Updated">{new Date(data.last_updated).toLocaleDateString()}</Descriptions.Item>

                <Descriptions.Item label="Date Added">{data.date_added}</Descriptions.Item>
            </Descriptions>

            <Descriptions title="Platform" bordered>
                <Descriptions.Item label="Name">{data.platform.name}</Descriptions.Item>
                <Descriptions.Item label="Symbol">{data.platform.symbol}</Descriptions.Item>
                <Descriptions.Item label="Slug">{data.platform.slug}</Descriptions.Item>
                <Descriptions.Item label="Token Address">{data.platform.token_address}</Descriptions.Item>
            </Descriptions>

            <Descriptions title="Quote USD" bordered>
                <Descriptions.Item label="Price">{data.quote.USD.price}</Descriptions.Item>
                <Descriptions.Item label="Volume 24 h">{data.quote.USD.volume_24h}</Descriptions.Item>
                <Descriptions.Item label="Percent Change 1h">{data.quote.USD.percent_change_1h}</Descriptions.Item>
                <Descriptions.Item label="Percent Change 24h">{data.quote.USD.percent_change_24h}</Descriptions.Item>
                <Descriptions.Item label="Percent Change 7d">{data.quote.USD.percent_change_7d}</Descriptions.Item>
                <Descriptions.Item label="Market Cap">{data.quote.USD.market_cap}</Descriptions.Item>
                <Descriptions.Item label="Last Updated">{data.quote.USD.last_updated}</Descriptions.Item>
            </Descriptions>
            </>
        );
    }
}

const Details = () => {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const details = useSelector(state => state.cryptoCurrencyDetails);
    const loadingData = useSelector(state => state.cryptoCurrencyDetailsLoader);
    const location = useLocation();

    useEffect(() => {
        const id = location.search.replace('?id=', '');
        dispatch(fecthCryptoCurrencyDetails(dispatch, id));
    }, []);

    useEffect(() => {
        dispatch(setNavUrl(window.location.pathname))
    }, []);

    return(
        <>
            <Card >
                <Skeleton loading={loadingData} active>
                    <Meta
                        title="Details of"
                        description={<DetailFormatted data={details}/>}
                    />
                </Skeleton>
            </Card>
        </>
    )
};

export default Details;

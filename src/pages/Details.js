import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Skeleton, Descriptions, Badge } from 'antd';
import { useLocation } from 'react-router-dom';
import { fecthCryptoCurrencyDetails } from '../Actions/details';
import { setNavUrl } from '../Actions/helpers';
import FormatDetails from '../Components/FormatDetails';

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
                        description={<FormatDetails data={details}/>}
                    />
                </Skeleton>
            </Card>
        </>
    )
};

export default Details;

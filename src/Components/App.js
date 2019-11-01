import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Menu, Icon } from 'antd';
import AppHeader from './AppHeader';
import Listing from '../pages/Listing';
import Details from '../pages/Details';

export default () => (
    <>
    <AppHeader />
    <Router>
        <Menu mode="horizontal">
            <Menu.Item key="Listing">
                <Icon type="unordered-list" />Listing
                <Link to="/"> </Link>
            </Menu.Item>
            <Menu.Item key="Details">
                <Icon type="file" />Details
                <Link to="/details"> </Link>
            </Menu.Item>
        </Menu>

        <Switch>
            <Route path="/details">
                <Details />
            </Route>
            <Route path="/">
                <Listing />
            </Route>
        </Switch>
    </Router>
    </>
);

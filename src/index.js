import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { initialState } from './reducers/initialState';
import 'antd/dist/antd.css';
import 'sass-rem/_rem.scss';
import './styles/styles.scss';
import App from '../src/Components/App';

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import DashboardPage from './components/DashboardPage';
import configureStore from './store/configure-store';
import { SnackbarProvider } from 'notistack';

const store = configureStore();

const jsx = (
    <Provider store={store}>
    <SnackbarProvider 
        maxSnack={3}
        transitionDuration={{ exit: 380, enter: 400 }}
        autoHideDuration= {2500}>
        <DashboardPage />
    </SnackbarProvider>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

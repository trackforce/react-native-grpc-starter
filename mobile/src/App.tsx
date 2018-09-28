import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { Root } from 'native-base';
import React from 'react';
import { providers } from './config';
import Router from './config/router';

configure({
    enforceActions: 'observed'
});

const DefaultApp = () => (
    <Provider {...providers}>
        <Root>
            <Router />
        </Root>
    </Provider>
);

export const App = DefaultApp;

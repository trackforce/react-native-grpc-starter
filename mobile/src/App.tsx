import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { Root, StyleProvider } from 'native-base';
import React from 'react';
import { providers } from './config';
import Router from './config/router';
import { withClearCacheListener } from './dev';
import { LOW_BATTERY_SYNC_WORKER_INTERVAL_TIME_MS, MINIMUM_BACKGROUND_FETCH_INTERVAL_MIN, SYNC_WORKER_INTERVAL_TIME_MS } from './env';
import getTheme from './native-base-theme/components';
import {
    ActiveWorker,
    AppStatusManager,
    BackgroundFetchService,
    BackgroundWorker,
    DeviceInfoService,
    InteractionManager,
    WorkersManager,
    TaskService,
    SendToBackendTask
} from './services';

// Enforces state mutations only via actions.
configure({
    enforceActions: true
});

const taskService = new TaskService();
taskService.registerTask(new SendToBackendTask(providers.backendSyncService, providers.grpcService));

const backgroundFetchService = new BackgroundFetchService();
const backgroundWorker = new BackgroundWorker(
    { minimumFetchInterval: MINIMUM_BACKGROUND_FETCH_INTERVAL_MIN },
    backgroundFetchService
);
const interactionManager = new InteractionManager();
const activeWorker = new ActiveWorker({ intervalTime: SYNC_WORKER_INTERVAL_TIME_MS }, interactionManager);
const appStatusManager = new AppStatusManager();
const deviceInfoService = new DeviceInfoService();
const workersManager = new WorkersManager(
    {
        syncWorkerIntervalTimeMs: SYNC_WORKER_INTERVAL_TIME_MS,
        lowBatterySyncWorkerIntervalTimeMs: LOW_BATTERY_SYNC_WORKER_INTERVAL_TIME_MS
    },
    taskService,
    backgroundWorker,
    activeWorker,
    providers.connectionManager,
    appStatusManager,
    deviceInfoService
);
workersManager.start();

const ProdApp = () => (
    <StyleProvider style={getTheme()}>
        <Provider {...providers}>
            <Root>
                <Router />
            </Root>
        </Provider>
    </StyleProvider>
);

const AppWithClearCacheListener = withClearCacheListener(ProdApp);

export const App = __DEV__ ? AppWithClearCacheListener : ProdApp;

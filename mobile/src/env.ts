import Config from 'react-native-config';

export const ENV = Config.ENV;
export const IS_DEVELOPMENT: boolean = Config.ENV === 'development';
export const IS_STAGING: boolean = Config.ENV === 'staging';
export const IS_PRODUCTION: boolean = Config.ENV === 'production';
export const API_URL: string = Config.API_URL;
export const MINIMUM_BACKGROUND_FETCH_INTERVAL_MIN = Number(Config.MINIMUM_BACKGROUND_FETCH_INTERVAL_MIN);
export const SYNC_WORKER_INTERVAL_TIME_MS = Number(Config.SYNC_WORKER_INTERVAL_TIME_MS);
export const LOW_BATTERY_SYNC_WORKER_INTERVAL_TIME_MS = Number(Config.LOW_BATTERY_SYNC_WORKER_INTERVAL_TIME_MS);

import {
    createSwitchNavigator
} from 'react-navigation';
import { DebugScreen } from '../screens/DebugScreen';

const Router = createSwitchNavigator(
    {
        Initial: DebugScreen
    },
    {
        initialRouteName: 'Initial'
    }
);

export default Router;

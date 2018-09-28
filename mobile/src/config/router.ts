import {
    createStackNavigator
} from 'react-navigation';
import { DebugScreen } from '../screens/DebugScreen';

const App = createStackNavigator({
    Home: { screen: DebugScreen }
});

export default App;

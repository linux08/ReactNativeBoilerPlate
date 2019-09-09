import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home'


const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export const RootNavigator = createAppContainer(MainStack);
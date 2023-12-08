import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MainScreen from './screens/MainScreen/MainScreen';

export const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MainView">
      <Stack.Screen
        name="MainView"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginView"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

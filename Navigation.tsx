import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';

export const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

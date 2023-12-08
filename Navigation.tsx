import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import ShortsScreen from './screens/ShortsScreen/ShortsScreen';

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
        name="LoginView"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

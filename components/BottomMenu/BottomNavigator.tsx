import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import MainScreen from '../../src/screens/MainScreen/MainScreen';
import MyPageScreen from '../../src/screens/MyPageScreen/MyPageScreen';
import ShortsScreen from '../../src/screens/ShortsScreen/ShortsScreen';
import CategoryScreen from '../../src/screens/CategoryScreen/CategoryScreen';
import {Navigation} from '../../Navigation';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Navigation}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: '카테고리',
          tabBarIcon: ({color}) => <Icon name="bars" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{
          tabBarLabel: '쇼츠',
          tabBarIcon: ({color}) => (
            <Icon name="youtube" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

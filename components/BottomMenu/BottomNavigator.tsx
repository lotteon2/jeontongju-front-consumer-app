import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import MainScreen from '../../screens/MainScreen/MainScreen';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import ShortsScreen from '../../screens/ShortsScreen/ShortsScreen';
import CategoryScreen from '../../screens/CategoryScreen/CategoryScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
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

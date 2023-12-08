import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import BottomNavigator from '../../components/BottomMenu/BottomNavigator';
import MainLayout from '../../layout/MainLayout';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>냥</Text>
    </SafeAreaView>
  );
};
export default MainScreen;

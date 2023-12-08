import {SafeAreaView, Text} from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

const MyPageScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>MYPAGE</Text>
      <Button onPress={() => navigation.navigate('Login')} title="로그인하기" />
    </SafeAreaView>
  );
};
export default MyPageScreen;

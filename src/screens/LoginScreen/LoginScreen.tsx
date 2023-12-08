import styled from '@emotion/native/macro';
import {Text, Button, View} from 'react-native';
import {useLoginScreen} from './LoginScreen.hooks';
import {getColor} from '../../libs/core/colors';
import {CustomButton} from '../../common/Button/Button';

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleFormLogin,
    handleSignUp,
    handleForgetPassword,
    handleKakaoLogin,
  } = useLoginScreen();
  return (
    <Container>
      <View>
        <StyledFormLoginText>이메일로 로그인</StyledFormLoginText>
        <StyledInput
          onChangeText={setEmail}
          value={email}
          placeholder="이메일 입력"
        />
        <StyledInput
          onChangeText={setPassword}
          value={password}
          placeholder="비밀번호 입력"
          secureTextEntry
        />
        <CustomButton content="로그인" onPress={handleFormLogin} />
        <StyledForgetPasswordText onPress={handleForgetPassword}>
          비밀번호를 잊으셨나요?
        </StyledForgetPasswordText>
      </View>
      <View>
        <StyledFormLoginText>
          소셜 계정으로 전통주점을 이용해보세요
        </StyledFormLoginText>
        <CustomButton content="카카오 로그인" onPress={handleKakaoLogin} />
      </View>
      <View>
        <CustomButton
          content="이메일로 가입하기"
          onPress={handleSignUp}
          btnType="text"
        />
      </View>
    </Container>
  );
};

export default LoginScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const StyledFormLoginText = styled.Text`
  padding: 8px;
  font-size: 16px;
`;

const StyledInput = styled.TextInput`
  border-radius: 12px;
  margin: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const StyledForgetPasswordText = styled.Text`
  color: ${getColor('lightGray')};
  padding: 8px;
`;

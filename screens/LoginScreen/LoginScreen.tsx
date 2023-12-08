import styled from '@emotion/native/macro';
import {Text, Button, View} from 'react-native';
import {useLoginScreen} from './LoginScreen.hooks';
import {getColor} from '../../libs/core/colors';

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleFormLogin,
    handleSignUp,
  } = useLoginScreen();
  return (
    <Container>
      <View>
        <Text>이메일로 로그인</Text>
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
        <StyledButton title="로그인" onPress={handleFormLogin} />
        <Text>비밀번호 찾기</Text>
      </View>
      <View>
        <Text>소셜 계정으로 전통주점을 이용해보세요</Text>
      </View>
      <View>
        <Button title="이메일로 가입하기" onPress={handleSignUp} />
      </View>
    </Container>
  );
};

export default LoginScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.TextInput`
  border-radius: 12px;
  margin: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const StyledButton = styled.Button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 335px;
  width: 100%;
  height: 44px;
  border-radius: 4px;
  border-color: ${getColor('primary')};
  border-width: 1px;
  background-color: ${getColor('primary')};
  margin-bottom: 0px;
  margin-top: 12px;
`;

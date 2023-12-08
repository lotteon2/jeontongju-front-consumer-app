import {useState} from 'react';
import {
  login,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import {authApi} from '../../apis/authentication/AuthenticationAPIService';

export const useLoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const handleFormLogin = async () => {
    console.log(email, password);
    try {
      const data = await authApi.signIn({email, password});
      if(data.code === 200) {
        console.log('here')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = () => {
    console.log('ghldnjsrkdl');
  };

  const handleForgetPassword = () => {
    console.log('hrere');
  };

  const handleKakaoLogin = async (): Promise<void> => {
    console.log('here');
    try {
      const token = await login();
      setResult(JSON.stringify(token));
      console.log(setResult(JSON.stringify(token)));
      console.log('login');
      console.log(token);
      try {
        const profile = await getKakaoProfile();

        setResult(JSON.stringify(profile));
        console.log(setResult(JSON.stringify(profile)));
      } catch (err) {
        console.error('signOut error', err);
      }
    } catch (err) {
      console.error('login err', err);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleFormLogin,
    handleSignUp,
    handleForgetPassword,
    handleKakaoLogin,
  };
};

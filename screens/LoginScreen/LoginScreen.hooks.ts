import {useState} from 'react';

export const useLoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormLogin = () => {
    console.log(email, password);
  };

  const handleSignUp = () => {
    console.log('ghldnjsrkdl');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleFormLogin,
    handleSignUp,
  };
};

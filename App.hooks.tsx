import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export const useAppMount = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1500);
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
};

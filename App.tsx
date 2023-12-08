import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {ThemeProvider} from './libs/providers/ThemeProvider';
import {theme} from './libs/core/theme';
import React, {useRef} from 'react';
import {QueryClientProvider, createQueryClient} from './libs/react-query';
import {useAppMount} from './App.hooks';
import Toast from 'react-native-toast-message';
import BottomNavigator from './components/BottomMenu/BottomNavigator';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.grayScale1,
  },
};

export const App = () => {
  const queryClientRef = useRef(createQueryClient());
  useAppMount();

  return (
    <NavigationContainer theme={navigationTheme}>
      <ThemeProvider>
        <QueryClientProvider client={queryClientRef.current}>
          <BottomNavigator />
          <Toast />
        </QueryClientProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

import React, {ComponentProps} from 'react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {Theme, theme as defaultTheme} from '../core/theme';
// import {Theme, theme as defaultTheme} from '@/libs/core/theme';

interface Props
  extends Omit<ComponentProps<typeof EmotionThemeProvider>, 'theme'> {
  theme?: Theme;
}

export const ThemeProvider = ({theme = defaultTheme, ...props}: Props) => {
  return <EmotionThemeProvider theme={theme} {...props} />;
};

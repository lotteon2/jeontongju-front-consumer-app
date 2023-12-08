export const colors = {
  primary: '#94e8b4',
  secondary: '#aab3ff',
  tertiary: '#f1ac63',
  lightGray: '#9db0a3',
  danger: '#E60A2E',
  white: '#eeeeee',
  black: '#0A0A0A'
} as const;

export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};

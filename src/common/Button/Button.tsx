import {PropsWithChildren} from 'react';
import styled, {css} from '@emotion/native';
import {getColor} from '../../libs/core/colors';
import {Text} from 'react-native';

interface Props {
  onPress?: () => void;
  content: string;
  btnType?: 'negative' | 'positive' | 'text';
}

export const CustomButton = ({
  onPress,
  content,
  btnType,
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton onPress={onPress} btnType={btnType}>
      <Text
        style={{
          color: btnType === 'text' ? getColor('black') : getColor('white'),
          fontWeight: '800',
          fontSize: 14,
        }}>
        {content}
      </Text>
    </StyledButton>
  );
};

const StyledButton = styled.Pressable<Pick<Props, 'btnType'>>`
  ${({theme, btnType}) => {
    const backgroundColor =
      btnType === 'negative'
        ? getColor('danger')
        : btnType === 'text'
        ? getColor('white')
        : getColor('primary');
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 335px;
      height: 44px;
      border-radius: 8px;
      padding: 8px;
      background-color: ${backgroundColor};
      margin: 8px;
    `;
  }}
`;

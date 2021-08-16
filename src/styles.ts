import styled from 'styled-components/native';
import theme from './global/styles/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
`;
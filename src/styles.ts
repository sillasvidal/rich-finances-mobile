import { Platform } from 'react-native';
import { css } from 'styled-components';

import styled from 'styled-components/native';
import theme from './global/styles/theme';

interface CardProps {
  type: 'incomes' | 'outcomes';
}

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.primary};

  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${Platform.OS === 'ios' ? '272px' : '200px'};
  width: 100%;
  top: 0;

  padding: 10px 20px 0px 20px;

  padding-top: ${Platform.OS === 'ios' ? '60px' : '10px'};
`;

export const ContainerTopHeader = styled.View`
  width: 100%;
  height: 65px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
`;

export const UserProfile = styled.View`
  background-color: ${({ theme }) => theme.colors.blue};

  height: 65px;
  width: 65px;

  border-radius: 33px;
`;

export const ContainerBalance = styled.View`
  height: 130px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextTitleBalance = styled.Text`
  color: ${({ theme }) => theme.colors.text_disabled};

  font-size: 18px;
`;

export const TextBalance = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: 36px;
`;

export const ContainerCards = styled.ScrollView`
  margin-top: 20px;
  
  display: flex;
  
  height: 200px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  
  height: 200px;
  width: 300px;

  border-radius: 5px;

  margin: 0 10px 0 10px;
`;

export const ContainerInfo = styled.View`
  width: 80%;
  height: 300px;

  margin: 10px 10px 0 10px;
`;

export const ContainerInfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_disabled};

  font-size: 20px;
`;

export const ContainerInfoContent = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};

  width: 384px;
  height: 208px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10px 0 10px;
  margin-top: 10px;
`;

export const ContainerInfoContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  margin: 0 20px 0 20px;

  font-size: 18px;
  text-align: center;
`;

export const ContainerInfoContentText = styled.Text`
  color: ${({ theme }) => theme.colors.text_disabled};

  font-size: 14px;
  text-align: center;

  margin: 10px 20px 0 20px;
`;

export const CardHeader = styled.View`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 20px 0 20px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_disabled};

  font-size: 24px;
`;

export const CardIcon = styled.View<CardProps>`
  height: 40px;
  width: 40px;

  background-color: ${({ theme }) => theme.colors.green};
  
  border-radius: 20px;

  ${props => props.type === 'outcomes'
    && css`
      background-color: ${({ theme }) => theme.colors.red}
    `
  };

`;

export const CardBody = styled.View`
  width: 100%;
  height: 100px;

  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 20px 20px 0 20px;
`;

export const CardValue = styled.Text<CardProps>`
  color: ${({ theme }) => theme.colors.green};
  
  font-size: 36;
  font-weight: 600;

  ${props => props.type === 'outcomes'
    && css`
      color: ${({ theme }) => theme.colors.red}
    `
  };
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.text_disabled};

  margin-top: 5px;

  font-size: 13px;
`;

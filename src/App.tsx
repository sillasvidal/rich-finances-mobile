import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import {
  Card,
  CardBody,
  CardHeader,
  CardIcon,
  CardText,
  CardTitle,
  CardValue,
  Container,
  ContainerBalance,
  ContainerCards,
  ContainerInfo,
  ContainerInfoContent,
  ContainerInfoContentText,
  ContainerInfoContentTitle,
  ContainerInfoTitle,
  ContainerTopHeader,
  Header,
  HeaderTitle,
  TextBalance,
  TextTitleBalance,
  UserProfile,
} from './styles';

import SplashScreen from 'react-native-splash-screen';

const App = () => {  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='#3D3D3D' />
      <Container>
        <Header>
          <ContainerTopHeader>
            <HeaderTitle>Rich Finances</HeaderTitle>
            <UserProfile></UserProfile>
          </ContainerTopHeader>
          <ContainerBalance>
            <TextTitleBalance>Saldo em contas</TextTitleBalance>
            <TextBalance>R$5.000,00</TextBalance>
          </ContainerBalance>
        </Header>

        <ContainerCards
         horizontal={true}
         showsHorizontalScrollIndicator={false}
        >
          <Card>
            <CardHeader>
              <CardTitle>Receitas</CardTitle>
              <CardIcon type="incomes" />
            </CardHeader>
            <CardBody>
              <CardValue type="incomes">R$5.000,00</CardValue>
              <CardText>Última receita dia 28 de agosto</CardText>
            </CardBody>
          </Card>
          <Card>
          <CardHeader>
              <CardTitle>Despesas</CardTitle>
              <CardIcon  type="outcomes"/>
            </CardHeader>
            <CardBody>
              <CardValue type="outcomes">R$5.000,00</CardValue>
              <CardText>Última despesa dia 28 de agosto</CardText>
            </CardBody>
          </Card>
        </ContainerCards>

        <ContainerInfo>
          <ContainerInfoTitle>Despesas por categoria</ContainerInfoTitle> 
          <ContainerInfoContent>
            <ContainerInfoContentTitle>
              Opa! Você não tem despesas
              cadastradas esse mês.
            </ContainerInfoContentTitle>

            <ContainerInfoContentText>
              Adicione seus gastos no mês atual para ver seus gráficos.
            </ContainerInfoContentText>
          </ContainerInfoContent>
        </ContainerInfo>
      </Container>
    </ThemeProvider>
  );
};

export default App;

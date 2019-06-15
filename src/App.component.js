import React from 'react';
import Menu from './components/Menu/Menu.component';
import Header from './components/Header/Header.component';
import Panel from './components/Panel/Panel.component';
import TrialForm from './components/TrialForm/TrialForm.component';
import {
  GlobalStyle,
  View,
  Container,
  Content
} from './App.style';

const App = props => {

  return (
    <>
      <GlobalStyle />
      <View>
        <Menu />
        <Container>
          <Content>
            <Header 
              title="Você está a poucos passos de otimizar suas campanhas!"
              subtitle="Queremos conhecer mais sobre sua empresa para melhorar sua experiência com a Voxus."
            />
            <Panel>
              <TrialForm onSubmit={values => console.log(values)}/>
            </Panel>
          </Content>
        </Container>
      </View>
    </>
  )
};

export default App;
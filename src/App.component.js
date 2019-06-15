import React from 'react';
import { sendForm } from './services/VoxusService';
import Menu from './components/Menu/Menu.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Panel from './components/Panel/Panel.component';
import TrialForm from './components/TrialForm/TrialForm.component';
import {
  GlobalStyle,
  View,
  Container,
  Content
} from './App.style';

const App = () => {

  const handleSubmitForm = (values) => {

    console.log(values);
    sendForm(values);
  }

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
              <TrialForm onSubmit={values => handleSubmitForm(values)}/>

            </Panel>
          </Content>
        </Container>
        <Footer />
      </View>
    </>
  )
};

export default App;
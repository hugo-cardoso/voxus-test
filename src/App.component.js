import React, { useState } from 'react';
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
  Content,
  AuxText
} from './App.style';

const App = () => {
  const [sendedForm, setSendedForm] = useState(false);

  const handleSubmitForm = (values) => {
    console.log(values);
    sendForm(values);
    setSendedForm(true);
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
            {
              sendedForm
              ? <AuxText>*Para usar o trial grátis você precisa ser um e-commerce e concordar com os termos e requisitos do trial gratuito. Saiba mais em: <a href="https://www.voxus.com.br/privacidade.html" target="_blank">Termos e requisitos de trial gratuito</a></AuxText>
              : ''
            }
          </Content>
        </Container>
        <Footer />
      </View>
    </>
  )
};

export default App;
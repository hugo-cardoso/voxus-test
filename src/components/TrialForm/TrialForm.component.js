import React, { useState } from 'react';
import { validate } from '../../utils/fieldValidator';
import Button from '../Button/Button.component';
import Input from '../Input/Input.component';
import InputPhone from '../InputPhone/InputPhone.component';
import Select from '../Select/Select.component';
import {
  Form,
  Message
} from './TrialForm.style';

const ALLOWANCE_ITEMS = [
  {
    name: '<= R$5.000',
    value: 1
  },{
    name: '>= R$5.001 e <= R$30.000',
    value: 2,
  },{
    name: '>= R$30.001 e <= R$100.000',
    value: 3,
  },{
    name: '>= R$100.001 e <= R$500.000',
    value: 4,
  },{
    name: '>= R$500.001',
    value: 4,
  },{
    name: 'Não se aplica',
    value: 0,
  }
];

const TrialForm = ({onSubmit}) => {

  const [labelButton, setLabelButton] = useState('Experimentar gratuitamente');
  const [sendedForm, setSendedForm] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [allowance, setAllowance] = useState('');
  const [company, setCompany] = useState('');
  const [url, setUrl] = useState('');

  const [nameError, setNameError] = useState({});
  const [phoneError, setPhoneError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [allowanceError, setAllowanceError] = useState({});
  const [companyError, setCompanyError] = useState({});
  const [urlError, setUrlError] = useState({});

  const validateField = () => {
    setNameError(validate({
      required: true
    }, name));
    setPhoneError(validate({
      required: true
    }, phone));
    setEmailError(validate({
      type: 'EMAIL',
      required: true
    }, email));
    setCompanyError(validate({
      required: true
    }, company));
    setUrlError(validate({
      type: 'URL',
      required: true
    }, url));
    setAllowanceError(validate({
      required: true
    }, allowance));

    if(
      nameError.status &&
      phoneError.status &&
      emailError.status &&
      companyError.status &&
      urlError.status &&
      allowanceError.status
    ) {
      onSubmit({name, phone, email, company, url, allowance});
      setLabelButton('Obrigado!');
      setSendedForm(true);
    }
  }

  const handleSubmit = event => {
    if( event ) event.preventDefault();

    validateField();
  }

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Input
        labelText="Nome completo"
        validationStatus={nameError}
        onChange={value => setName(value)}
      />
      <InputPhone
        labelText="Telefone"
        validationStatus={phoneError}
        onChange={value => setPhone(value)}
      />
      <Input
        labelText="Endereço de e-mail"
        validationStatus={emailError}
        onChange={value => setEmail(value)}
      />
      <Input
        labelText="Nome da empresa"
        validationStatus={companyError}
        onChange={value => setCompany(value)}
      />
      <Input
        labelText="URL do site"
        validationStatus={urlError}
        onChange={value => setUrl(value)}
      />
      <Select
        options={ALLOWANCE_ITEMS}
        labelText="Verba mensal em mídia"
        validationStatus={allowanceError}
        onChange={value => setAllowance(value)}
      />
      <Button 
        type="submit"
        variant={sendedForm ? 'outline' : 'primary'}
        label={labelButton}
        onClick={() => handleSubmit()}
        />
        {
          sendedForm
          ? <Message>Entraremos em contato em até 24hs úteis.</Message>
          : ''
        }
    </Form>
  )
}

export default TrialForm;
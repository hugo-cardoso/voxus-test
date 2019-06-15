const isValidEmail = value => {
  return (value.length && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
};

const isValidUrl = value => {
  return (value.length && /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value));
}

const isValidMinLength = (value, length) => value.toString().length > length;

const isValidMaxLength = (value, length) => (value.length > 0 && value.length <= length);

const validateByType = (type, value) => {
  switch (type) {
    case 'EMAIL':
      return {
        status: isValidEmail(value),
        message: 'E-mail inválido.'
      }
    case 'URL':
      return {
        status: isValidUrl(value),
        message: 'Domínio inválido.'
      }
    default: {
      return {
        status: true,
        message: ''
      }
    }
  }
}

const validateByOptions = (options, value) => {
  const keys = Object.keys(options);
  const validations = keys.map(option => {
    switch (option) {
      case 'minLength':
        return {
          status: isValidMinLength(value, options[option]),
          message: `A quantidade mínima de caracteres é ${ options[option] }.`
        }
      case 'maxLength':
        return {
          status: isValidMaxLength(value, options[option]),
          message: `A quantidade máxima de caracteres é ${ options[option] }.`
        }
      default: {
        return {
          status: true,
          message: ''
        }
      }
    }
  });

  return validations.map(({status}) => status).includes(false) 
  ? validations.filter(({status}) => !status)[0]
  : validations[0];
}

const validate = (options, value) => {
  const keys = Object.keys(options);

  if( keys.includes('required') && options.required ) {
    if( !isValidMinLength(value, 0) ) {
      return {
        status: false,
        message: 'Este campo é obrigatório!'
      }
    }
  }

  return keys.includes('type') 
  ? validateByType(options['type'], value) 
  : validateByOptions(options, value);
};

export {
  validate
};
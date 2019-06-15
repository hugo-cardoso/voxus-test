import { get, post } from './HttpService';

const OPTIONS = {
  url: 'https://enjfhz76sls2.x.pipedream.net/'
};

const sendForm = data => {
  return post(OPTIONS.url, data);
};

export {
  sendForm
};


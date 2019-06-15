const get = url => fetch(url).then(res => res.json);

const post = (url, data) => fetch(url, {method: 'POST', body: JSON.stringify(data)}).then(res => res.json());

export {
  get,
  post
}
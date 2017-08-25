const API_BASE = '/api';
export const EXAMPLE_ENDPOINT = API_BASE + '/example';

const fetchOptions = {
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include',
  method: 'GET'
};

const post = body => ({
  ...fetchOptions,
  meathod: 'POST',
  body: JSON.stringify(body)
});

export const getExample = () =>
  fetch(EXAMPLE_ENDPOINT, fetchOptions).then(handleHttpResponse);

export const postExample = data =>
  fetch(EXAMPLE_ENDPOINT, post(data)).then(handleHttpResponse);

const handleHttpResponse = response => {
  if (response.ok) {
    return response.json();
  }

  throw Error(response.statusText);
};

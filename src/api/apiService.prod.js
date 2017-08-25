const API_BASE = '/api';
export const EXAMPLE_ENDPOINT = API_BASE + '/example';

const commonFetchConfig = {
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include'
};

export const getExample = () =>
  fetch(EXAMPLE_ENDPOINT, { ...commonFetchConfig, method: 'GET' }).then(
    handleHttpResponse
  );

export const postExample = data =>
  fetch(EXAMPLE_ENDPOINT, {
    ...commonFetchConfig,
    method: 'POST',
    body: JSON.stringify(data)
  }).then(handleHttpResponse);

const handleHttpResponse = response => {
  if (response.ok) {
    return response.json();
  }

  throw Error(response.statusText);
};

const API_VERSION = '/v1';
export const EXAMPLE_ENDPOINT = API_VERSION + '/example';

const commonFetchConfig = {
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include'
};

export function getExample() {
  return fetch(EXAMPLE_ENDPOINT, { ...commonFetchConfig, method: 'GET' }).then(
    handleHttpResponse
  );
}

export function postExample(data) {
  return fetch(EXAMPLE_ENDPOINT, {
    ...commonFetchConfig,
    method: 'POST',
    body: JSON.stringify(data)
  }).then(handleHttpResponse);
}

function handleHttpResponse(response) {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json);
  });
}

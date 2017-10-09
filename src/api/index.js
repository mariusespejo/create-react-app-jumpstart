import * as endpoints from './endpoints';
import { handleHttpResponse } from './responseHandlers';

export const fetchOptions = {
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include',
  method: 'GET'
};

export const post = body => ({
  ...fetchOptions,
  method: 'POST',
  body: JSON.stringify(body)
});

export const put = body => ({
  ...post(body),
  method: 'PUT'
});

export const getExample = () =>
  fetch(endpoints.EXAMPLE_ENDPOINT, fetchOptions).then(handleHttpResponse);

export const postExample = data =>
  fetch(endpoints.EXAMPLE_ENDPOINT, post(data)).then(handleHttpResponse);

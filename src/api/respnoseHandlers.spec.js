import { handleHttpResponse, getEmbeddedResource } from './responseHandlers';

it('should return the respnose json if the response is OK', () => {
  const expectedJson = { id: 0 };
  const response = {
    ok: true,
    json: jest.fn().mockReturnValue(expectedJson)
  };
  expect(handleHttpResponse(response)).toEqual(expectedJson);
});

it('should throw an Error if the response is NOT ok', () => {
  const expectedJson = { id: 0 };
  const response = {
    ok: false,
    status: 404,
    statusText: 'Not Found'
  };
  try {
    handleHttpResponse(response);
  } catch (error) {
    expect(error).toEqual(Error(response.status + ' ' + response.statusText));
  }
});

it('should return the first _embedded resource from a HAL json response', () => {
  const halJson = {
    _embedded: {
      arrayResource: [{ id: 0 }]
    }
  };

  expect(getEmbeddedResource(halJson)).toEqual(halJson._embedded.arrayResource);
});

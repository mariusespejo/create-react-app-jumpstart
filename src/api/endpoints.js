let API_BASE = '/api';
if (process.env.REACT_APP_MOCK_API) API_BASE = '/mockApi';

export const EXAMPLE_ENDPOINT = API_BASE + '/example';

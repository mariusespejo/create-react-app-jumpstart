let apiService;
if (process.env.REACT_APP_MOCK_API) {
  apiService = require('./apiService.dev');
} else {
  apiService = require('./apiService.prod');
}

export default apiService;

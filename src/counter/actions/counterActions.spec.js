import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as counterActions from './counterActions';
import { EXAMPLE_ENDPOINT } from '../../api/apiService.prod';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

beforeEach(() => {
  fetchMock.restore();
});

it('should dispatch actions to flag the store when async incrementing and increment the count when done', () => {
  fetchMock.post(EXAMPLE_ENDPOINT, {});

  const store = mockStore();

  const expectedDispatchedActions = [
    counterActions.asyncIncrementStarted(),
    counterActions.incrementCount(),
    counterActions.asyncIncrementSucess()
  ];

  return store.dispatch(counterActions.asyncIncrementCount()).then(() => {
    const actualDispatchedActions = store.getActions();
    expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
  });
});

it('should dispatch an action that the async increment failed', () => {
  fetchMock.post(EXAMPLE_ENDPOINT, { throws: 'error' });

  const store = mockStore();

  const expectedDispatchedActions = [
    counterActions.asyncIncrementStarted(),
    counterActions.asyncIncrementFailure()
  ];

  return store.dispatch(counterActions.asyncIncrementCount()).then(() => {
    const actualDispatchedActions = store.getActions();
    expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
  });
});

import count, { getCountValue, getIsLoading } from './count';
import initialState from './initialState';
import * as counterActions from '../actions/counterActions';

it('should increment the count by 1', () => {
  const nextState = count(initialState, counterActions.incrementCount());

  expect(nextState.value).toEqual(1);
});

it('should make isLoading true when async increment starts', () => {
  const nextState = count(initialState, counterActions.asyncIncrementStarted());

  expect(nextState.isLoading).toEqual(true);
});

it('should make isLoading false when async increment fails', () => {
  const loadingState = { ...initialState, isLoading: true };
  let nextState = count(loadingState, counterActions.asyncIncrementSucess());

  expect(nextState.isLoading).toEqual(false);
});

it('should make isLoading false when async increment fails', () => {
  const loadingState = { ...initialState, isLoading: true };
  let nextState = count(loadingState, counterActions.asyncIncrementFailure());

  expect(nextState.isLoading).toEqual(false);
});

it('should select the count value from the full state', () => {
  const state = { count: initialState };

  expect(getCountValue(state)).toEqual(initialState.value);
});

it('should select the count loading flag from the full state', () => {
  const state = { count: initialState };

  expect(getIsLoading(state)).toEqual(initialState.isLoading);
});

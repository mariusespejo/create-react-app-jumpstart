import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function count(state = initialState, action) {
  const value = state.value;
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return { ...state, value: value + 1 };
    case types.ASYNC_INCREMENT_STARTED:
      return { ...state, isLoading: true };
    case types.ASYNC_INCREMENT_SUCCESS:
      return { ...state, isLoading: false };
    case types.ASYNC_INCREMENT_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export const getCountValue = state => state.count.value;
export const getIsLoading = state => state.count.isLoading;

import * as types from './actionTypes';
import makeActionCreator from '../../reduxConfig/utils/makeActionCreator';
import * as Api from '../../api';

export const incrementCount = makeActionCreator(types.INCREMENT_COUNT);
export const asyncIncrementStarted = makeActionCreator(
  types.ASYNC_INCREMENT_STARTED
);
export const asyncIncrementSucess = makeActionCreator(
  types.ASYNC_INCREMENT_SUCCESS
);
export const asyncIncrementFailure = makeActionCreator(
  types.ASYNC_INCREMENT_FAILURE
);

export function asyncIncrementCount() {
  return async function(dispatch) {
    try {
      dispatch(asyncIncrementStarted());
      const response = await Api.postExample();
      dispatch(incrementCount());
      dispatch(asyncIncrementSucess());
      return response;
    } catch (error) {
      dispatch(asyncIncrementFailure());
      alert(
        'Note: run the app locally with the mock api to see this working :)'
      );
    }
  };
}

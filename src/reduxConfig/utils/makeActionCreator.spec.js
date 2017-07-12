import makeActionCreator from './makeActionCreator';

it('should generate an action creator', () => {
  const actionType = 'ACTION_TYPE';
  const payloadName = 'payload';
  const anotherPayloadName = 'anotherPayload';
  const actionCreator = makeActionCreator(
    actionType,
    payloadName,
    anotherPayloadName
  );

  expect(actionCreator(payloadName, anotherPayloadName)).toEqual({
    type: actionType,
    payload: payloadName,
    anotherPayload: anotherPayloadName
  });
});

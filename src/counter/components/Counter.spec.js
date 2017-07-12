import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

function generateCounterProps() {
  return {
    value: 0,
    incrementCount: jest.fn(),
    asyncIncrementCount: jest.fn(),
    isLoading: false
  };
}

it('should render the count value and a button for incrementing', () => {
  const props = generateCounterProps();

  const wrapper = shallow(<Counter {...props} />);

  expect(wrapper.find('.counter-value').text()).toEqual(props.value.toString());
  expect(wrapper.find('.increment-button').length).toEqual(1);
  expect(wrapper.find('.async-increment-button').length).toEqual(1);
  expect(wrapper.find('.async-increment-button').text()).toEqual(
    'Async Increment'
  );
});

it('should call the incrementCount function when the button is clicked', () => {
  const props = generateCounterProps();

  const wrapper = shallow(<Counter {...props} />);

  wrapper.find('.increment-button').simulate('click');

  expect(props.incrementCount).toHaveBeenCalled();
});

it('should show a loading message on the async button', () => {
  const props = generateCounterProps();
  props.isLoading = true;

  const wrapper = shallow(<Counter {...props} />);

  expect(wrapper.find('.async-increment-button').length).toEqual(1);
  expect(wrapper.find('.async-increment-button').text()).toEqual('Loading...');
});

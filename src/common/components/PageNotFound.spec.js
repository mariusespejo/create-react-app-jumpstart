import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

it('should render a page not found message', () => {
  const wrapper = shallow(<PageNotFound />);

  expect(wrapper.find('.not-found-message').length).toEqual(1);
  expect(wrapper.find('.go-back-link').length).toEqual(1);
});

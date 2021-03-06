// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

it('renders correctly', () => {
  const wrapper = shallow(
    <Section>
      <div>Example content</div>
    </Section>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes classname to wrapper', () => {
  const wrapper = shallow(
    <Section className="example-classname">
      <div>Example content</div>
    </Section>,
  );

  expect(wrapper.find('.example-classname').exists()).toEqual(true);
});

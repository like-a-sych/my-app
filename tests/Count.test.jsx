import React from 'react';
import renderer from 'react-test-renderer';

import Count from '../src/component/Count.jsx';

describe('<Count />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Count />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

test('renders correctly', () => {
  render(<App />);
});
// expect(snapshot).toMatchSnapshot();

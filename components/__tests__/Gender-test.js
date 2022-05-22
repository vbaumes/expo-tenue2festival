import * as React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store';

import Gender from '../burger/Gender';

it(`renders correctly`, () => {
  const tree = renderer.create(<Provider store={store}><Gender name="Vêtements" /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

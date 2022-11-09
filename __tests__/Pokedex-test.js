import Pokedex from '../Pokedex';
import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import 'react-native';
import * as api from '../api';

jest.mock('/api');
describe('PokemonGroup', () => {
  test('should resnder pokemon names when Api responds', async () => {
    api.apidata.mockResolvedValue({
      results: [{name: 'pokedex'}],
    });
    render(<Pokedex />);
    await waitFor(() => {
      screen.getByText('pikachu');
    });
  });
});

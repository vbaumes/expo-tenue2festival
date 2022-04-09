/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomePage: {
            screens: {
              HomePage: 'one',
            },
          },
          Burger: {
            screens: {
              BurgerScreen: 'two',
            },
          },
          Wishlist: {
            screens: {
              WishlistScreen: 'three',
            },
          },
          News: {
            screens: {
              NewsScreen: 'four',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;

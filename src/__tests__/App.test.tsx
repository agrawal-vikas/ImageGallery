/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import NavigationContainerComponent from '../NavigationContainer';

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../NavigationContainer', () => jest.fn(() => null));

test('renders correctly', () => {
  render(
    <App />
  );
  expect(NavigationContainerComponent).toBeCalled();
});

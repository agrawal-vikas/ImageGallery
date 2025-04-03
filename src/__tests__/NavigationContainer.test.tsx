import React from 'react';
import { render } from '@testing-library/react-native';
import NavigationContainerComponent, { RootStack } from '../NavigationContainer';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

jest.mock('../screens/ListScreen', () => jest.fn(() => null));
jest.mock('../screens/DetailsScreen', () => jest.fn(() => null));

jest.mock('@react-navigation/native-stack', () => {
    const { Text } = require('react-native');
    return {
        createNativeStackNavigator: jest.fn(() => ({
            Navigator: ({ children }: { children: React.ReactNode }) => <>{children}</>,
            Screen: ({ children }: { children: React.ReactNode }) => <>{children}</>,
            config: {
                initialRouteName: 'List',
                screens: {
                    List: () => <Text>List</Text>,
                    Details: () => <Text>Details</Text>,
                }
            },
        })),
    };
});

describe('NavigationContainer', () => {
    it('renders the navigation container without crashing', () => {
        const { toJSON } = render(
            <NavigationContainerComponent />
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it('has the correct initial route', () => {
        expect(RootStack.config.initialRouteName).toBe('List');
    });

    it('renders the ListScreen component for the "List" route', () => {
        const { toJSON } = render(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="List" component={ListScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it('renders the DetailsScreen component for the "Details" route', () => {
        const { toJSON } = render(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="Details" component={DetailsScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
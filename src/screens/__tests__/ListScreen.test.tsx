import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../ListScreen';
import { View } from 'react-native';
import { ImageSectionProps } from '../../components/ImageSection';

jest.mock('../../components/ImageSection', () => {
    return ({ title }: ImageSectionProps) => {
        const { Text } = require('react-native'); // Import Text here
        return (
            <Text>
                {title}
            </Text>
        );
    }
});
describe('ListScreen', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <NavigationContainer>
                <ListScreen />
            </NavigationContainer>
        );

        expect(getByText('Kittens')).toBeTruthy();
        expect(getByText('Dogs')).toBeTruthy();
        expect(getByText('Public')).toBeTruthy();
    });
});
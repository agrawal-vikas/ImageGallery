import React from 'react';
import { render } from '@testing-library/react-native';
import Tag from '../Tag';

describe('Tag Component', () => {
    it('renders correctly with the given tag', () => {
        const { getByTestId } = render(<Tag tag="TestTag" />);
        const tagElement = getByTestId('tag-TestTag');
        expect(tagElement).toBeTruthy();
        expect(tagElement.props.children).toBe('TestTag');
    });

    it('applies the correct styles', () => {
        const { getByTestId } = render(<Tag tag="StyledTag" />);
        const tagElement = getByTestId('tag-StyledTag');
        expect(tagElement.props.style).toMatchObject({
            display: 'flex',
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: 12,
            lineHeight: 20,
            borderRadius: 4,
            backgroundColor: '#E3F2FD',
            borderColor: '#0D47A1',
            borderWidth: 1,
            color: '#0D47A1',
        });
    });
});
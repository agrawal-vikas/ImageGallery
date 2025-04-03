import { useRoute } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import { extractDescriptionWithoutImage, extractNameAndEmail, formatUtcToReadableDate } from '../../utils';
import DetailsScreen from '../DetailsScreen';

jest.mock('@react-navigation/native', () => ({
    useRoute: jest.fn(),
}));

jest.mock('../../utils', () => ({
    extractNameAndEmail: jest.fn(),
    formatUtcToReadableDate: jest.fn(),
    extractDescriptionWithoutImage: jest.fn(),
}));

describe('DetailsScreen', () => {
    const mockImage = {
        media: { m: 'https://example.com/image.jpg' },
        author: 'author@example.com (Author Name)',
        published: '2023-01-01T00:00:00Z',
        description: '<p>Sample description</p>',
        tags: 'tag1 tag2 tag3',
    };

    beforeEach(() => {
        (useRoute as jest.Mock).mockReturnValue({
            params: { image: mockImage },
        });
        (extractNameAndEmail as jest.Mock).mockReturnValue({ name: 'Author Name' });
        (formatUtcToReadableDate as jest.Mock).mockReturnValue('January 1, 2023');
        (extractDescriptionWithoutImage as jest.Mock).mockReturnValue('Sample description');
    });

    it('renders the image', () => {
        const { getByTestId } = render(<DetailsScreen />);
        const image = getByTestId('image');
        expect(image.props.source.uri).toBe(mockImage.media.m);
    });

    it('displays the author name', () => {
        const { getByText } = render(<DetailsScreen />);
        expect(getByText('Author Name')).toBeTruthy();
    });

    it('formats and displays the published date', () => {
        const { getByText } = render(<DetailsScreen />);
        expect(getByText('January 1, 2023')).toBeTruthy();
    });

    it('renders the description without images', () => {
        const { getByText } = render(<DetailsScreen />);
        expect(getByText('Sample description')).toBeTruthy();
    });

    it('renders all tags correctly', () => {
        const { getByText } = render(<DetailsScreen />);
        mockImage.tags.split(' ').forEach((tag) => {
            expect(getByText(tag)).toBeTruthy();
        });
    });

    it('renders the description using RenderHtml', () => {
        const { getByText } = render(<DetailsScreen />);
        expect(getByText('Sample description')).toBeTruthy();
    });

    it('renders the metadata section', () => {
        const { getByText } = render(<DetailsScreen />);
        expect(getByText('Author:')).toBeTruthy();
        expect(getByText('Published:')).toBeTruthy();
        expect(getByText('Description:')).toBeTruthy();
        expect(getByText('Tags:')).toBeTruthy();
    });
});
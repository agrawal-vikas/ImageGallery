import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { TypeImage } from '../../screens/types/types';
import { searchPhotos } from '../../services/services';
import ImageSection from '../ImageSection';

jest.mock('../../services/services', () => ({
    searchPhotos: jest.fn(),
}));

describe('ImageSection Component', () => {
    const mockImages: TypeImage[] = [
        {
            title: 'Image 1', media: { m: 'https://example.com/image1.jpg' },
            author: '',
            author_id: '',
            date_taken: '',
            description: '',
            link: '',
            published: '',
            tags: ''
        },
        {
            title: 'Image 2', media: { m: 'https://example.com/image2.jpg' },
            author: '',
            author_id: '',
            date_taken: '',
            description: '',
            link: '',
            published: '',
            tags: ''
        },
    ];

    const mockOnImagePress = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the title correctly', () => {
        const { getByText } = render(
            <ImageSection title="Test Title" tag="dogs" onImagePress={mockOnImagePress} />
        );
        expect(getByText('Test Title')).toBeTruthy();
    });

    it('fetches and displays images', async () => {
        (searchPhotos as jest.Mock).mockResolvedValue(mockImages);

        const { getByText } = render(
            <ImageSection title="Test Title" tag="dogs" onImagePress={mockOnImagePress} />
        );

        await waitFor(() => {
            expect(getByText('Image 1')).toBeTruthy();
            expect(getByText('Image 2')).toBeTruthy();
        });

        expect(searchPhotos).toHaveBeenCalledWith('dogs');
    });

    it('handles errors during image fetching gracefully', async () => {
        (searchPhotos as jest.Mock).mockRejectedValue(new Error('Network Error'));

        const { getByText } = render(
            <ImageSection title="Test Title" tag="dogs" onImagePress={mockOnImagePress} />
        );

        await waitFor(() => {
            expect(searchPhotos).toHaveBeenCalledWith('dogs');
        });

        expect(getByText('Test Title')).toBeTruthy(); // Component should still render
    });
});
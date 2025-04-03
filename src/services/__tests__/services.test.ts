import { searchPhotos } from '../services';
import axiosClient from '../axiosClient';

jest.mock('../axiosClient');

describe('searchPhotos', () => {
    it('should fetch photos based on the query and return the items', async () => {
        const mockResponse = {
            data: {
                items: [
                    { id: '1', title: 'Photo 1', url: 'http://example.com/photo1.jpg' },
                    { id: '2', title: 'Photo 2', url: 'http://example.com/photo2.jpg' },
                ],
            },
        };

        (axiosClient.get as jest.Mock).mockResolvedValue(mockResponse);

        const query = 'nature';
        const result = await searchPhotos(query);

        expect(axiosClient.get).toHaveBeenCalledWith('', { params: { tags: query } });
        expect(result).toEqual(mockResponse.data.items);
    });

    it('should throw an error if the API call fails', async () => {
        const mockError = new Error('Network Error');
        (axiosClient.get as jest.Mock).mockRejectedValue(mockError);

        const query = 'nature';

        await expect(searchPhotos(query)).rejects.toThrow('Network Error');
        expect(axiosClient.get).toHaveBeenCalledWith('', { params: { tags: query } });
    });
});
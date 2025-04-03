import { TypeImage } from "../screens/types/types";
import axiosClient from "./axiosClient";

export const searchPhotos = async (query: string): Promise<TypeImage[]> => {
    try {
        const response = await axiosClient.get('', {
            params: {
                tags: query,
            },
        });

        return response.data.items;
    } catch (error) {
        console.error('Error fetching photos from Flickr:', error);
        throw error;
    }
};


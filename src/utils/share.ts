import { Share } from "react-native";

export const handleShare = async (message: string) => {
    try {
        await Share.share({
            message: message,
        });
    } catch (error) {
        console.error('Error sharing:', error);
    }
};
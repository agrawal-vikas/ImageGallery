import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { TypeImage } from '../screens/types/types';
import { searchPhotos } from '../services/services';
import ErrorBoundary from './ErrorBoundry';

export type ImageSectionProps = {
    title: string,
    tag: 'dogs' | 'kittens' | 'public',
    onImagePress?: (image: TypeImage) => void,
}
const ImageSection = ({ title, tag, onImagePress }: ImageSectionProps) => {

    const [images, setImages] = React.useState<TypeImage[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        const fetchImages = async () => {
            try {
                setLoading(true);
                const resp = await searchPhotos(tag);
                setImages(resp);
            } catch (error) {
                console.error('Error fetching images from Flickr:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const SkeletonLoader = <View style={{ alignItems: 'center', marginRight: 8 }}>
        <View style={[styles.image, { backgroundColor: '#e0e0e0' }]} />
        <View style={{ width: 80, height: 20, backgroundColor: '#e0e0e0', marginTop: 4 }} />
    </View>

    return (
        <ErrorBoundary>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {loading ? Array.from({ length: 4 }).map((_, index) => <View key={index}>{SkeletonLoader}</View>)
                        : images.map((image, index) => (
                            <TouchableOpacity key={index} onPress={() => onImagePress?.(image)}>
                                <Image key={index} source={{ uri: image.media.m }} style={styles.image} />
                                <Text style={styles.imageTitle}>{image.title}</Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>

            </View>
        </ErrorBoundary >
    );
}

const styles = StyleSheet.create({
    section: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    },
    imageTitle: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginTop: 4,
        maxWidth: 80,
        maxHeight: 40,
    }
});

export default ImageSection;
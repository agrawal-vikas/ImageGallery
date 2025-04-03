import React from 'react';
import { View, Text, Image, StyleSheet, Share, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import { DetailsScreenRouteProp } from './types/types';
import Tag from '../components/Tag';
import { extractDescriptionWithoutImage, extractNameAndEmail, formatUtcToReadableDate } from '../utils';

const DetailsScreen = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const image = route.params.image;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image.media.m }}
                style={styles.image}
                resizeMode="contain"
                testID="image"
            />
            <View style={styles.metadata}>
                <View style={styles.row}>
                    <Text style={styles.label}>Author:</Text>
                    <Text style={styles.value}>{extractNameAndEmail(image.author)?.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Published:</Text>
                    <Text style={styles.value}>{formatUtcToReadableDate(image.published)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Description:</Text>
                    <RenderHtml
                        contentWidth={styles.metadata.padding || 0}
                        source={{ html: extractDescriptionWithoutImage(image.description) || '' }}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tags:</Text>
                    <View style={{ ...styles.tags, ...styles.value }}>
                        {image.tags.split(' ').map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </View>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    metadata: {
        padding: 32,
        backgroundColor: '#f8f8f8',

    },
    author: {
        fontSize: 16,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4
    }
});

export default DetailsScreen;
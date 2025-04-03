import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { searchPhotos } from '../services/services';
import { RootStackParamList, TypeImage } from './types/types';
import ImageSection from '../components/ImageSection';
import ErrorBoundary from '../components/ErrorBoundry';

const ListScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleImagePress = (image: TypeImage) => {
        navigation.navigate('Details', { image });
    };

    return (
        <ScrollView style={styles.container}>
            <ImageSection
                title="Kittens"
                tag="kittens"
                onImagePress={handleImagePress} />
            <ImageSection
                title="Dogs"
                tag="dogs"
                onImagePress={handleImagePress} />
            <ImageSection
                title="Public"
                tag="public"
                onImagePress={handleImagePress} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    }
});

export default ListScreen;
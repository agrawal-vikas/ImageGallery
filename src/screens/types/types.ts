import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    List: undefined;
    Details: { image: TypeImage };
};

export type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;
export type ListScreenRouteProp = RouteProp<RootStackParamList, 'List'>;

export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type TypeImage = {
    author: string;
    author_id: string
    date_taken: string
    description: string
    link: string
    media: { m: string }
    published: string
    tags: string
    title: string
}
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList } from './screens/types/types';
import { Button } from 'react-native';
import { handleShare } from './utils/share';

export const RootStack = createNativeStackNavigator<RootStackParamList>({
    initialRouteName: 'List',
    screens: {
        List: {
            screen: ListScreen,
            options: {
                title: 'Image Gallery',
            },
        },
        Details: {
            screen: DetailsScreen,
            options: ({ route }) => ({
                title: route.params.image.title,
                headerBackTitle: 'Back',
                headerRight: () => (
                    <Button
                        onPress={() => handleShare(route.params.image.link)}
                        title="Share"
                    />
                ),
            })

        }
    },
});

const NavigationContainerComponent = createStaticNavigation(RootStack);

export default NavigationContainerComponent;
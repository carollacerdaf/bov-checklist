import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Home } from '@screens/Home';
import { Details } from '@screens/Details';
import { Register } from '@screens/Register';
import { ChecklistDTO } from '@dtos/ChecklistDTO';

type AppRoutes = {
    home: undefined,
    details: { checklistItemId: string },
    register?: { checklistItem: ChecklistDTO },
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="details" component={Details} />
            <Screen name="register" component={Register} />
        </Navigator>
    );
}
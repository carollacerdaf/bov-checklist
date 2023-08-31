import { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { useApp } from '@hooks/useApp'

import { AppRoutes } from './app.routes';

export function Routes() {
    const { COLORS } = useTheme();
    const { item } = useApp();

    console.log(item);
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Infos } from './pages/Infos';
import { ResultIMC } from './pages/ResultIMC';

const { Navigator, Screen } = createStackNavigator();


export function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} >
                <Screen name="Infos" component={ Infos } />
                <Screen name="ResultIMC" component={ ResultIMC } />
            </Navigator>
        </NavigationContainer>
    );
}   
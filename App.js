import React, { useState } from 'react'
import CreateWallet from './Screens/CreateWallet';
import HomeScreen from './Screens/HomeScreen';
import Password from './Screens/Password';
import PolyGon from './Screens/PolyGon';
import Recovery from './Screens/Recovery';
import Secret from './Screens/Secret';
import Wall from './Screens/Wall';
import Bottomtab from './Screens/Bottomtab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
        const Stack = createNativeStackNavigator();
        return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName='sixth' screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name='First' component={CreateWallet} />
                <Stack.Screen name='Second' component={HomeScreen} />
                <Stack.Screen name='Third' component={Password} />
                <Stack.Screen name='Fourth' component={Recovery} />
                <Stack.Screen name='Fifth' component={Secret} /> */}
                <Stack.Screen name='sixth' component={Wall} />
                {/* <Stack.Screen name='Bottomtab' component={Bottomtab} /> */}
              </Stack.Navigator>
          </NavigationContainer>
        );
};

export default App
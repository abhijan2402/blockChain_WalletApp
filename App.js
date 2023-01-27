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
        const [user, setuser] = useState(true);
        const Stack = createNativeStackNavigator();
        return (
                <NavigationContainer>
                        {
                                user == false ?
                                        <Stack.Navigator initialRouteName='Second' screenOptions={{ headerShown: false }}>
                                                <Stack.Screen name='Second' component={HomeScreen} />
                                                <Stack.Screen name='First' component={CreateWallet} />
                                                <Stack.Screen name='Third' component={Password} />
                                                <Stack.Screen name='Fourth' component={Recovery} />
                                                <Stack.Screen name='Fifth' component={Secret} />
                                        </Stack.Navigator> :
                                        <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{ headerShown: false }}>
                                                <Stack.Screen name='Bottomtab' component={Bottomtab} />
                                        </Stack.Navigator>

                        }
                </NavigationContainer>
        );
};

export default App
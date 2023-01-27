import React from 'react'
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

const App=()=> {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
              <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{headerShown:false}}>
                      <Stack.Screen name='Bottomtab' component={Bottomtab}/>
              </Stack.Navigator>
      </NavigationContainer>
      // <CreateWallet />
      // <HomeScreen />
      //  <Password />  
      //  <Recovery /> 
      //  <Secret /> 
      //  <Wall /> 
      //  <PolyGon /> 
      //  <HomeScreen />
      //  <CreateWallet/> 
  );
};

export default App
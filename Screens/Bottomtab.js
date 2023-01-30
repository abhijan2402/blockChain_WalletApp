import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PolyGon from './PolyGon';
import Wall from './Wall';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
        showIcon: false,

        tabBarStyle: [{
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        },],
        activeTintColor: 'pink',
      }}
    >
      <Tab.Screen name="Home" component={Wall} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: focused ? '#047BD5' : 'black', fontFamily: "SourceSansPro-Regular" }}>Wallet</Text>
          </View>
        )
      }} />

      <Tab.Screen name='Categories' component={PolyGon} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: focused ? '#047BD5' : 'black', textAlign: "center", fontFamily: "SourceSansPro-Regular" }}>Cubane</Text>
          </View>
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "lightblue",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
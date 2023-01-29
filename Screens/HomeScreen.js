import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

function HomeScreen({ navigation }) {
    return (
        <View style={{ margin: 100, alignSelf: "center" }}>
            {/* <View style={{ backgroundColor: "lightgrey", margin: 25, height: 240 }}> */}
            <View style={{ alignContent: "center", alignSelf: "center" }}>
                <Image source={require("../asset/CB_Logo.png")} style={{ height: 280, width: 170 }} />
                {/* </View> */}
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontWeight: "900", color: "black", fontSize: 20 }}>Welcome to ChatBuck</Text>
            </View>
            <View style={{}}>
                <Text style={{ color: "black", fontSize: 15 }}>Connectong you to Ethereum and the Decentralized Web</Text>
            </View>
            <View style={{ margin: 24, alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 15 }}>We are happy for you</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Third")} style={{ height: 50, width: 200, marginLeft: 10, marginTop: 20, backgroundColor: '#0047AB', borderRadius: 20, marginBottom: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 15, color: 'white', fontSize: 15, }}>Get Started</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HomeScreen
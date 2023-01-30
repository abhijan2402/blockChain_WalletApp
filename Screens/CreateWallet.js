import React from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
function CreateWallet({ navigation }) {
    return (
        <View style={{ alignItems: "center", height: windowheight, backgroundColor: "white" }}>

            <View style={{ marginTop: 50 }}>
                <Text style={{ fontWeight: "900", color: "black", fontSize: 24 }}>New to Meta Mask?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Third")} style={{ borderColor: "black", borderWidth: 1, borderRadius: 12, height: windowheight / 4, width: windowWidth / 1.4, backgroundColor: 'white', position: 'absolute', zIndex: 88, marginTop: windowheight / 4, alignContent: "center" }} >
                <Image source={require("../asset/plus.png")} style={{ height: windowheight / 25, width: windowWidth / 12, alignSelf: "center", marginTop: 12 }} />
                <View>
                    <Text style={{ textAlign: "center", marginTop: 30, color: "black" }}>Yes,let's get set up</Text>
                </View>
                <View>
                    <Text style={{ textAlign: "center", marginTop: 20, color: "black" }}>That will create a new wallet and Secret Recovery Phrase</Text>
                </View>


            </TouchableOpacity>
        </View>
    )
}

export default CreateWallet
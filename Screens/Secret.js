import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get('window');
function Secret({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>Secret Recovery Phase</Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, width: '80%', textAlign: "center", margin: 20, }}>
                Your secret recovery phase makes it easy to back up and restore your account
            </Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, width: '90%', textAlign: "center", margin: 20, }}>
                Warning: Never disclosure your secret Recovery Phase. Anymore this phase can take your Ether forever
            </Text>
            <View style={styles.stringsConatainer}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <Text style={{ fontSize: 30, backgroundColor: "white", margin: 10, elevation: 5 }}>hello</Text>
                    ))
                }
            </View>
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: "space-between" }}>
                <TouchableOpacity
                    style={[styles.customButton, { backgroundColor: "white" }]}
                >
                    <Text style={{ color: "#4658E6", fontWeight: 'bold', }}>Remind me later</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.customButton, { backgroundColor: "#4658E6" }]}
                    onPress={() => navigation.navigate("Bottomtab")}
                >
                    <Text style={{ color: "white", fontWeight: 'bold', }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: "red",
        color: "black",
        height: 40,
        width: width - 40,
        marginTop: 10,
    },
    customButton: {
        width: width / 2.5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 5
    },
    stringsConatainer: {
        width: width - 40,
        padding: 20,
        backgroundColor: "transparent",
        borderRadius: 10,
        margin: 10,
        borderWidth: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: "center"
    }
})
export default Secret
import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
const { width, height } = Dimensions.get('window')
function Password({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>Create Password</Text>
            <TextInput
                style={styles.textInput}
                placeholder='New Password'
                placeholderTextColor={"black"}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Confirm Password'
                placeholderTextColor={"black"}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate("Fourth")}
                style={styles.customButton}
            >
                <Text style={{ color: "white", fontWeight: 'bold' }}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    textInput: {
        backgroundColor: "white",
        color: "black",
        height: 50,
        width: width - 40,
        marginTop: 30,
        elevation: 10,
        paddingHorizontal: 10,
        fontWeight: "bold",
        borderRadius: 5
    },
    customButton: {
        width: width / 2,
        height: 40,
        backgroundColor: "#4658E6",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        borderRadius: 100
    }
})
export default Password
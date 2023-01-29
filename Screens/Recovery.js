import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, LogBox, Image, ScrollView, TextInput } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Recovery({ navigation }) {
    return (
        <ScrollView style={styles.MainView}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText1}>Import a wallet with secret recovery Phrase</Text>
                <Text style={styles.HeaderText2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </Text>
            </View>
            <View>
                <Text style={styles.HeaderText1}>Secret recovery Phrase</Text>
            </View>
            <View style={styles.Helpdesc}>
                <Text style={styles.HelpdescText}>You can paste your entire secret recovery phrase into any field</Text>
            </View>
            <View style={styles.TextFieldViewOut}>
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
            </View>
            <View>
                <Text style={styles.HeaderText1}>Secret recovery Phrase</Text>
            </View>
            <View style={styles.Helpdesc}>
                <Text style={styles.HelpdescText}>You can paste your entire secret recovery phrase into any field</Text>
            </View>
            <View style={styles.TextFieldViewOut}>
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
                <TextInput placeholder='Value1' style={styles.TextFieldView} />
            </View>
            <View>
                <TextInput placeholder='Password' style={[styles.TextFieldView, { marginHorizontal: 20, width: windoWidth / 1.3 }]} />
                <TextInput placeholder='Password' style={[styles.TextFieldView, { marginHorizontal: 20, width: windoWidth / 1.3 }]} />
                <TouchableOpacity style={styles.MainBtn}>
                    <Text style={styles.MainBtnText} onPress={() => navigation.navigate("Fifth")}>Create</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    HeaderView: {
        marginVertical: 15
    },
    HeaderText1: {
        fontSize: 18,
        color: "black",
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 10
    },
    HeaderText2: {
        textAlign: "center",
        fontSize: 13,
        color: "black",
        marginHorizontal: 10
    },
    Helpdesc: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: 'rgb(23, 164, 219)',
        backgroundColor: "rgb(193, 229, 243)"
    },
    HelpdescText: {
        fontSize: 13,
        color: "black"
    },
    TextFieldViewOut: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 20
    },
    TextFieldView: {
        borderWidth: 1,
        width: windoWidth / 2.3,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8
    },
    MainBtn: {
        marginHorizontal: 30,
        backgroundColor: "#4658E6",
        marginVertical: 30,
        paddingVertical: 15,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    MainBtnText: {
        color: "white",
        fontWeight: "700",
        fontSize: 15
    }
})

export default Recovery
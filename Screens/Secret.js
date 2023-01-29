import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const SetArray = [];
function Secret({ navigation }) {
    const [newArray, setnewArray] = useState([])
    const [updatedarray, setupdatedarray] = useState([])
    useEffect(() => {
        for (i = 0; i < 12; i++) {
            if (i < 12) {
                makeid(5);
            }
        }
        setDataToAsync();
    }, [])

    const setDataToAsync = async () => {
        try {
            const value1 = await AsyncStorage.getItem('RecoveryData1')
            const value2 = await AsyncStorage.getItem('RecoveryData2')
            const value3 = await AsyncStorage.getItem('RecoveryData3')
            const value4 = await AsyncStorage.getItem('RecoveryData4')
            const value5 = await AsyncStorage.getItem('RecoveryData5')
            const value6 = await AsyncStorage.getItem('RecoveryData6')
            const value7 = await AsyncStorage.getItem('RecoveryData7')
            const value8 = await AsyncStorage.getItem('RecoveryData8')
            const value9 = await AsyncStorage.getItem('RecoveryData9')
            const value10 = await AsyncStorage.getItem('RecoveryData10')
            const value11 = await AsyncStorage.getItem('RecoveryData11')
            const value12 = await AsyncStorage.getItem('RecoveryData12')


            if (value1 == null && value2 == null && value3 == null && value4 == null && value5 == null && value6 == null && value7 == null && value8 == null && value9 == null && value10 == null && value11 == null && value12 == null) {
                await AsyncStorage.setItem('RecoveryData1', SetArray[0])
                await AsyncStorage.setItem('RecoveryData2', SetArray[1])
                await AsyncStorage.setItem('RecoveryData3', SetArray[2])
                await AsyncStorage.setItem('RecoveryData4', SetArray[3])
                await AsyncStorage.setItem('RecoveryData5', SetArray[4])
                await AsyncStorage.setItem('RecoveryData6', SetArray[5])
                await AsyncStorage.setItem('RecoveryData7', SetArray[6])
                await AsyncStorage.setItem('RecoveryData8', SetArray[7])
                await AsyncStorage.setItem('RecoveryData9', SetArray[8])
                await AsyncStorage.setItem('RecoveryData10', SetArray[9])
                await AsyncStorage.setItem('RecoveryData11', SetArray[10])
                await AsyncStorage.setItem('RecoveryData12', SetArray[11])
            }
            else {
                const SetArray1 = []
                const data0 = await AsyncStorage.getItem('RecoveryData1')
                SetArray1.push(data0)
                const data1 = await AsyncStorage.getItem('RecoveryData2')
                SetArray1.push(data1)
                const data2 = await AsyncStorage.getItem('RecoveryData3')
                SetArray1.push(data2)
                const data3 = await AsyncStorage.getItem('RecoveryData4')
                SetArray1.push(data3)
                const data4 = await AsyncStorage.getItem('RecoveryData5')
                SetArray1.push(data4)
                const data5 = await AsyncStorage.getItem('RecoveryData6')
                SetArray1.push(data5)
                const data6 = await AsyncStorage.getItem('RecoveryData7')
                SetArray1.push(data6)
                const data7 = await AsyncStorage.getItem('RecoveryData8')
                SetArray1.push(data7)
                const data8 = await AsyncStorage.getItem('RecoveryData9')
                SetArray1.push(data8)
                const data9 = await AsyncStorage.getItem('RecoveryData10')
                SetArray1.push(data9)
                const data10 = await AsyncStorage.getItem('RecoveryData11')
                SetArray1.push(data10)
                const data11 = await AsyncStorage.getItem('RecoveryData12')
                SetArray1.push(data11)
                console.log(SetArray1)
                const newData = SetArray1;
                setupdatedarray(newData)
            }
        } catch (e) {
            console.log(e)
        }
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        SetArray.push(result)
        setnewArray(SetArray);
        // console.log(SetArray)
        // console.log(newArray)

        return result;
    }
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
                    updatedarray.map((item) => (
                        <View style={{ backgroundColor: "white", width: '25%', height: 40, margin: 5, elevation: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                            <Text style={{ fontSize: 15, color: "black" }}>{item}</Text>
                        </View>
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
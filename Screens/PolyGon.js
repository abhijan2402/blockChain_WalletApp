import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, LogBox, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function PolyGon() {
    const [TrasactionData, setTrasactionData] = useState([])
    useEffect(() => {
        GetTransactionData();
        GetTransactionData();
    }, [])

    const GetTransactionData = async () => {
        try {
            const response = await fetch('https://bd49-103-175-180-34.in.ngrok.io/chain', {
                method: 'get',
            });
            const json = await response.json();
            let Newdata = json.chain
            console.log(Newdata)
            setTrasactionData(Newdata)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.MainView}>
            <View style={styles.inputContainer}>
                {/* <TextInput style={styles.TextInput} placeholder='Search...' placeholderTextColor={'black'} onChangeText={searchKey => searchData(searchKey)} /> */}
                <Text style={{ textAlign: "center", fontSize: 20, color: "black", fontWeight: "800", marginVertical: 10 }}>TrasactionData</Text>
            </View>
            <ScrollView>
                <View style={styles.Table}>
                    <View style={[styles.TableRow1, { width: windoWidth / 8 }]}>
                        <Text style={styles.TableHeading}>Nonce</Text>
                    </View>
                    <View style={[styles.TableRow1, { width: windoWidth / 1.8 }]}>
                        <Text style={styles.TableHeading}>Previous_hash</Text>
                    </View>
                    <View style={[styles.TableRow1, { width: windoWidth / 3.1 }]}>
                        <Text style={styles.TableHeading}>Timestamp</Text>
                    </View>
                </View>
                {
                    TrasactionData.length == 0 ? <View style={{ justifyContent: "center", alignItems: "center", height: windoHeight / 1.3 }}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View> :
                        TrasactionData.map((item) => (
                            <View style={styles.Table} key={item.timestamp}>
                                <View style={[styles.TableRow1, { width: windoWidth / 8 }]}>
                                    <Text>{item.nonce}</Text>
                                </View>
                                <View style={[styles.TableRow1, { width: windoWidth / 1.8 }]}>
                                    <Text>{item.previous_hash}</Text>
                                </View>
                                <View style={[styles.TableRow1, { width: windoWidth / 3.16 }]}>
                                    <Text>{item.timestamp}</Text>
                                </View>
                            </View>
                        ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    inputContainer: {
        marginVertical: 10
    },
    TextInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 8
    },
    Table: {
        // borderWidth: 1,
        display: "flex",
        flexDirection: "row",

    },
    TableRow1: {
        width: windoWidth / 3,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5
    },
    TableHeading: {
        fontWeight: "800",
        color: "black"
    }
})
export default PolyGon
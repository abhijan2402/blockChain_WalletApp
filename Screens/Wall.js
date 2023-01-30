import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, LogBox, Image, ScrollView, TextInput, RefreshControl } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

function Wall({ navigation }) {
    const [Assets, setAssets] = useState(true)
    const [Activitiies, setActivitiies] = useState(false)
    const [TrasactionData, setTrasactionData] = useState([])

    const [amount, setAmount] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("details");
    const [refreshing, setRefreshing] = useState(false);

    const [receptantaddress, setreceptantaddress] = useState('')
    const [value, setvalue] = useState('')

    const Active = () => {
        console.log("i am Active")
        setAssets(true)
        setActivitiies(false)
    }
    const DisActive = () => {
        console.log("i am disactove")
        setActivitiies(true)
        setAssets(false)
    }
    useEffect(() => {
        GetTransactionData();
        // GetAmount();
        // get_user_amt();
    }, [])

    const get_user_amt = async () => {
        console.log(TrasactionData.blockchain_address);
        try {
            const response = await fetch(`https://4519-103-175-180-34.in.ngrok.io/wallet/amount?blockchain_address=${TrasactionData.blockchain_address}`);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    const sendData = async () => {
        try {
            if (receptantaddress === '' || value === '') {
                throw "Enter all fields"
            }
            fetch('https://4519-103-175-180-34.in.ngrok.io /transaction', {
                method: "POST",
                body: JSON.stringify({
                    sender_private_key: TrasactionData.private_key,
                    sender_blockchain_address: TrasactionData.blockchain_address,
                    recipient_blockchain_address: receptantaddress,
                    sender_public_key: TrasactionData.public_key,
                    value: value
                })
            })
                .then((res) => res.json())
                .then(res => alert(res.message))
                .catch(e => {
                    console.log(e)
                })
        } catch (error) {
            console.log(error);
        }
    }

    const GetTransactionData = async () => {
        try {
            const value1 = await AsyncStorage.getItem('Newdata')
            console.log(value1);
            if (value1 == null) {
                const response = await fetch('https://dade-103-175-180-34.in.ngrok.io/wallet', {
                    method: 'Post',
                });
                const json = await response.json();
                setTrasactionData(json)
                let Newdata = JSON.stringify(json)
                console.log(json);
                await AsyncStorage.setItem('Newdata', Newdata);
                get_user_amt(json.blockchain_address)
            }
            else {
                const data0 = await AsyncStorage.getItem('Newdata');
                let Main = JSON.parse(data0)
                get_user_amt(Main.blockchain_address)
                setTrasactionData(Main)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollView style={styles.MainView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={get_user_amt} />
            }
        >
            <View style={styles.HeaderView}>
                <Text style={styles.AccountText1}>Main Account</Text>
                <Text style={styles.AccountText}>
                    Amount : {amount}
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                <View style={styles.OptionSection}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4208/4208397.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Buy</Text>
                </View>
                <TouchableOpacity style={styles.OptionSection} onPress={() => {
                    setModalType("inputs")
                    setShowModal(true)
                }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3682/3682321.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OptionSection}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5972/5972857.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Snap</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.textButton} onPress={() => {
                    setModalType('details')
                    setShowModal(true)
                }}>
                    <Text style={{ color: "black", fontWeight: "500" }}>
                        show details
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                <TouchableOpacity style={[styles.PartitionView, { borderBottomWidth: Assets ? 2 : 0 }]} onPress={Active}>
                    <Text style={{ color: "black" }}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.PartitionView, { borderBottomWidth: Activitiies ? 2 : 0 }]} onPress={DisActive}>
                    <Text style={{ color: "black" }}>Assests</Text>
                </TouchableOpacity>
            </View>
            {
                Assets ?
                    <View>
                        <Text>Assests</Text>
                    </View> :
                    <View>
                        <Text>Activitiies</Text>
                    </View>

            }
            <Modal visible={showModal} animationType='slide' transparent={true}>
                <View style={styles.modeOuter}>
                    <View style={styles.innnerModel}>

                        {
                            modalType === 'details' ?
                                <>
                                    <Text style={styles.AccountText1}>blockchain_address- {TrasactionData.blockchain_address}</Text>
                                    <Text style={styles.AccountText1}>private_key- {TrasactionData.private_key}</Text>
                                    <Text style={styles.AccountText1}>public_key- {TrasactionData.public_key}</Text>
                                </> :
                                <>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder='receptant address'
                                        placeholderTextColor={"black"}
                                        onChangeText={(receptant) => setreceptantaddress(receptant)}
                                    />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder='value'
                                        placeholderTextColor={"black"}
                                        onChangeText={(value) => setvalue(value)}
                                    />
                                    <TouchableOpacity style={[styles.textButton, { backgroundColor: "blue" }]} onPress={sendData}>
                                        <Text style={{ color: "white" }}>Send Money</Text>
                                    </TouchableOpacity>
                                </>
                        }

                        <TouchableOpacity style={styles.textButton} onPress={() => setShowModal(false)}>
                            <Text style={{ color: "black" }}>
                                Hide Details
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    AccountText1: {
        textAlign: "center",
        fontSize: 18,
        color: "black",
        fontWeight: "800",
        marginVertical: 10,
    },
    AccountText: {
        textAlign: "center",
        fontSize: 15,
        color: "black",
        fontWeight: "800"
    },
    AccountText1: {
        textAlign: "center",
        fontSize: 12,
        color: "black",
        fontWeight: "600",
        marginHorizontal: 10
    },
    HeaderView: {
        height: windoHeight / 5,
        // borderWidth: 1,
        justifyContent: "center"
    },
    imgLogo: {
        width: 30,
        height: 30
    },
    OptionSection: {
        width: windoWidth / 3,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    PartitionView: {
        // borderWidth: 1,
        width: windoWidth / 2,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomColor: "blue"
    },
    modeOuter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
    },
    innnerModel: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: windoWidth,
        padding: 5,
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation: 10
    },
    textButton: {
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: windoWidth / 2.5,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        elevation: 5
    },
    textInput: {
        backgroundColor: "white",
        color: "black",
        height: 50,
        width: windoWidth - 40,
        marginTop: 30,
        elevation: 10,
        paddingHorizontal: 10,
        fontWeight: "bold",
        borderRadius: 5
    },
})

export default Wall
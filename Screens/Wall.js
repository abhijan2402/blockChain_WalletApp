import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, LogBox, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Wall() {
    const [Assets, setAssets] = useState(true)
    const [Activitiies, setActivitiies] = useState(false)
    const [TrasactionData, setTrasactionData] = useState([])
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
    }, [])

    const GetTransactionData = async () => {
        try {
            const response = await fetch('https://ddc8-103-159-45-133.in.ngrok.io/wallet', {
                method: 'Post',
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
            <View style={styles.HeaderView}>
                <Text style={styles.AccountText1}>Main Account</Text>
                <Text style={styles.AccountText}>Amount : u87657890878</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                <View style={styles.OptionSection}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4208/4208397.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Buy</Text>
                </View>
                <View style={styles.OptionSection}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3682/3682321.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Send</Text>
                </View>
                <View style={styles.OptionSection}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5972/5972857.png' }} style={styles.imgLogo} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "700", marginVertical: 5 }}>Snap</Text>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                <TouchableOpacity style={[styles.PartitionView, { borderBottomWidth: Assets ? 2 : 0 }]} onPress={Active}>
                    <Text>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.PartitionView, { borderBottomWidth: Activitiies ? 2 : 0 }]} onPress={DisActive}>
                    <Text>Assests</Text>
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
        </View>
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
        marginVertical: 5
    },
    AccountText: {
        textAlign: "center",
        fontSize: 15,
        color: "black",
        fontWeight: "800"
    },
    HeaderView: {
        height: windoHeight / 13,
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
    }
})

export default Wall
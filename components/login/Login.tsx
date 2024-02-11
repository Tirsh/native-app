import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";
import {GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Logo from '../../assets/logo.svg';

const Login = () => {
    const {setAppState, appState} = useContext(AppContext);
    const image = {uri: "https://rerptest.rikon.lv/auth/_next/static/media/bg.783dae49.jpg"};
    const pressStartHandler = (event: GestureResponderEvent) => {
        event.defaultPrevented;
        setAppState("BARCODE_SCANNER");
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.wrapper}>
                    <View style={styles.logoWrapper}>
                        <Logo width={190}/>
                        <Text style={styles.header}>Rerp</Text>
                    </View>
                    <TouchableOpacity
                        onPress={pressStartHandler}
                        style={styles.button}
                    >
                        <Text style={styles.text}>
                            Сканировать QR
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',

    },
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: '#14274e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        margin: "auto",
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        borderRadius: 10,
        width: "80%",
        height: 250,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    },
    logoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
});

export default Login;


import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Camera} from "expo-camera";
import Close from "../../assets/close.svg";
import {CameraContext} from "./context/CameraContext";

const CameraBlock = () => {
    const {setShow} = useContext(CameraContext);
    let camera: Camera;

    const takePictureHandler = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync();
        console.log(photo);
    }

    const closeCameraHandler = () => {
        setShow(false);
    }

    return (
        <View style={styles.cameraBlock}>
            <Camera
                style={{flex: 1}}
                ref={ref => {
                    camera = ref
                }}
            >
                <View style={styles.cameraCanvas}>
                    <View style={styles.buttonCanvas}>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                onPress={takePictureHandler}
                                style={styles.button}
                            />
                        </View>
                    </View>
                    <View style={styles.cameraClose}>
                        <TouchableOpacity
                            onPress={closeCameraHandler}
                        >
                            <View style={styles.closeBtn}>
                                <Close/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    cameraBlock: {
        position: "absolute",
        zIndex:3,
        flex: 1,
        width: '100%',
    },
    button: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    buttonCanvas: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: "center"
    },
    buttonWrapper: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    cameraCanvas: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    cameraClose: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        width: '100%',
        padding: 25,
        alignItems: "flex-start"
    },
    closeBtn: {
        width: 30,
        height: 30
    }
});

export default CameraBlock;

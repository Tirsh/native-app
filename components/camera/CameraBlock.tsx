import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Camera} from "expo-camera";

const CameraBlock = () => {
    let camera: Camera;

    const takePictureHandler = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync();
        console.log(photo);
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
                        <TouchableOpacity><Text>Назад</Text></TouchableOpacity>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                onPress={takePictureHandler}
                                style={styles.button}
                            />
                        </View>
                    </View>
                </View>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    cameraBlock: {
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
        justifyContent: 'space-between',
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
    }
});

export default CameraBlock;

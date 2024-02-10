import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import {Camera} from "expo-camera";
import {CameraContext} from "./context/CameraContext";
import {BarCodeScanner} from "expo-barcode-scanner";
import useBarcodeScanner from "./useBarcodeScanner";

const BarcodeScannerBlock: React.FC = ({}) => {
    const context = useContext(CameraContext);
    let camera: Camera;
    const {handleAfterScanned} = useBarcodeScanner(context);

    return (
        <View style={styles.cameraBlock}>
            <Camera
                onBarCodeScanned={context.hasScanned ? null : handleAfterScanned}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
                }}
                style={styles.barCodeStyles}
                ref={ref => {
                    camera = ref
                }}
            >
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    cameraBlock: {
        height: "100%",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        backgroundColor: "#000",
    },
    barCodeStyles: {
        width: "80%",
        height: "40%"
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
});

export default BarcodeScannerBlock;

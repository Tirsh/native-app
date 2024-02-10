import {useCallback, useContext} from "react";
import {BarCodeScanningResult} from "expo-camera";
import {AppCameraContextProps} from "./context/CameraContext";
import {AppContext} from "../context/AppContext";

const useBarcodeScanner = (context: AppCameraContextProps) => {
    const {setUrl, setToken, setAppState} = useContext(AppContext);

    const handleAfterScanned = useCallback(
        (result: BarCodeScanningResult) => {
            context.setHasScanned(true);
            try {
                const dataFromQr = JSON.parse(result.data);
                if(!dataFromQr.url || ! dataFromQr.token){
                    throw new URIError("Incorrect qr code, should be JSON serialize object with field 'url' and 'token'");
                };
                setUrl(dataFromQr.url);
                setToken(dataFromQr.token);
                setAppState("AUTHORIZATION");

            } catch (e) {
                context.setHasScanned(false);
            }

        }, []);

    return {
        handleAfterScanned
    }
}

export default useBarcodeScanner;
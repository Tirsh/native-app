import {FC, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {Camera, CameraCapturedPicture, CameraType, FlashMode} from "expo-camera";
import {CameraContext} from "./CameraContext";
import {Alert} from "react-native";
import {AppContext} from "../../context/AppContext";

export type CameraModeType = "SCANNER" | "CAMERA";

interface CameraProviderProps {
    showCamera: boolean;
    children: ReactNode;
}

const CameraProvider: FC<CameraProviderProps> = ({children, showCamera}) => {
    const {setAppState, appState, setWebViewHidden} = useContext(AppContext);
    const [show, setShow] = useState<boolean>(false);
    const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture | null>(null);
    const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
    const [hasScanned, setHasScanned] = useState<boolean>(false);

    useEffect(() => {
        const cameraInit = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            if (status === 'granted') {
            } else {
                Alert.alert('Access denied');
                if (appState === "BARCODE_SCANNER") {
                    setAppState("AUTHORIZATION");
                } else {
                    setWebViewHidden(false);
                }
            }
        }
        cameraInit();
    }, []);

    useEffect(() => {
        setShow(showCamera);
    }, [showCamera]);





    const defaultProps = useMemo(() => ({
        show,
        setShow,
        hasScanned,
        setHasScanned,
        capturedImage,
        setCapturedImage,
        cameraType,
        setCameraType
    }), [hasScanned, capturedImage, cameraType, show]);

    return (
        <CameraContext.Provider value={defaultProps}>
            {show? children: null}
        </CameraContext.Provider>
    );
};

export default CameraProvider;
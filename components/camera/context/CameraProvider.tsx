import React, {useMemo} from "react";
import {CameraCapturedPicture, CameraType, FlashMode} from "expo-camera";
import {CameraContext} from "./CameraContext";

export type CameraModeType = "SCANNER" | "CAMERA";

const CameraProvider: React.FC = ({children}) => {
    const [startCamera, setStartCamera] = React.useState<boolean>(false);
    const [capturedImage, setCapturedImage] = React.useState<CameraCapturedPicture>(null);
    const [cameraType, setCameraType] = React.useState<CameraType>(CameraType.back);
    const [flashMode, setFlashMode] = React.useState<FlashMode>(FlashMode.off);
    const [hasScanned, setHasScanned] = React.useState<boolean>(false);
    const [cameraMode, setCameraMode] = React.useState<CameraModeType>("barcodeScanner");

    const defaultProps = useMemo(() => ({
        hasScanned,
        setHasScanned,
        startCamera,
        setStartCamera,
        capturedImage,
        setCapturedImage,
        flashMode,
        setFlashMode,
        cameraType,
        setCameraType,
        cameraMode,
        setCameraMode
    }), [hasScanned, startCamera, capturedImage, cameraType, flashMode, cameraMode]);

    return (
        <CameraContext.Provider value={defaultProps}>
            {children}
        </CameraContext.Provider>
    );
};

export default CameraProvider;
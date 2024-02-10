import {createContext} from "react";
import {CameraCapturedPicture, CameraType, FlashMode} from "expo-camera";
import {CameraModeType} from "./CameraProvider";

export interface AppCameraContextProps {
    startCamera: boolean;
    setStartCamera: (value: boolean) => void;
    hasScanned: boolean;
    setHasScanned: (value: boolean) => void;
    capturedImage: CameraCapturedPicture | null;
    setCapturedImage: (picture: CameraCapturedPicture | null) => void;
    cameraType?: CameraType;
    setCameraType?: (type: CameraType) => void;
    flashMode?: FlashMode;
    setFlashMode?: (mode: FlashMode) => void;
}

export const CameraContext = createContext<AppCameraContextProps>({
        capturedImage: null,
        hasScanned:false,
        setCapturedImage(): void {},
        setStartCamera(): void {},
        setHasScanned(): void {},
        startCamera: false,
        cameraType: CameraType.back,
        setCameraType(): void {}
    });

import {createContext} from "react";
import {CameraCapturedPicture, CameraType} from "expo-camera";

export interface AppCameraContextProps {
    show: boolean;
    setShow: (show: boolean) => void;
    hasScanned: boolean;
    setHasScanned: (value: boolean) => void;
    capturedImage: CameraCapturedPicture | null;
    setCapturedImage: (picture: CameraCapturedPicture | null) => void;
    cameraType: CameraType;
    setCameraType: (type: CameraType) => void;
}

export const CameraContext = createContext<AppCameraContextProps | null>(null);

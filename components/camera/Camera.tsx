import CameraProvider, {CameraModeType} from "./context/CameraProvider";
import {useMemo} from "react";
import CameraBlock from "./CameraBlock";
import BarcodeScannerBlock from "./BarcodeScannerBlock";

interface CameraProps {
    cameraMode: CameraModeType;
    show: boolean;
}

const Camera = ({cameraMode, show}: CameraProps) => {
    const render = useMemo( () => {
        return cameraMode === "CAMERA" ? <CameraBlock/> : <BarcodeScannerBlock/>
    }, [cameraMode])
    return (
        <CameraProvider showCamera={show}>
            {render}
        </CameraProvider>
    )
}

export default  Camera;
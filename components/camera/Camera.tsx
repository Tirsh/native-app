import CameraProvider, {CameraModeType} from "./context/CameraProvider";
import {useMemo} from "react";
import CameraBlock from "./CameraBlock";
import BarcodeScannerBlock from "./BarcodeScannerBlock";

interface CameraProps {
    cameraMode: CameraModeType;
}

const Camera = ({cameraMode}: CameraProps) => {
    const render = useMemo( () => {
        return cameraMode === "CAMERA" ? <CameraBlock/> : <BarcodeScannerBlock/>
    }, [cameraMode])
    return (
        <CameraProvider>
            {render}
        </CameraProvider>
    )
}

export default  Camera;
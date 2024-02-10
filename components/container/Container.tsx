import {useContext, useMemo} from "react";
import {AppState} from "../context/AppProvider";
import {AppContext} from "../context/AppContext";
import Camera from "../camera/Camera";
import Login from "../login/Login";
import {AppWebView} from "../webview/AppWebView";
import {View} from "react-native";

const Container = () => {

    const {appState, url} = useContext(AppContext);
    const content = useMemo(() => {
        switch (appState) {
            case "BARCODE_SCANNER": {
                return (<Camera cameraMode={"SCANNER"}/>)
            }
            case "AUTHORIZATION": {
                if (!url) {
                    return (<Login/>)
                }
                return (<>
                    <AppWebView source={url}/>
                    <Login/>
                    </>)
            }
            case "WEBVIEW": {
                return (
                    <>
                        <AppWebView source={url}/>
                        <Camera cameraMode={"CAMERA"}/>
                    </>
                )
            }
        }
    }, [appState]);
    console.log(appState);
    return content;
}

export default Container;
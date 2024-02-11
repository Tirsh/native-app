import {useContext, useMemo} from "react";
import {AppState} from "../context/AppProvider";
import {AppContext} from "../context/AppContext";
import Camera from "../camera/Camera";
import Login from "../login/Login";
import {AppWebView} from "../webview/AppWebView";
import {StyleSheet, View} from "react-native";
import Loading from "../webview/Loading";

const Container = () => {
    const context = useContext(AppContext);
    const {appState, url, token, showCamera} = context;

    const mainContent = useMemo( () => {
        switch (appState) {
            case "BARCODE_SCANNER": {
                return (<Camera show={true} cameraMode={"SCANNER"}/>)
            }
            case "AUTHORIZATION": {
                if (!url) {
                    return (<Login/>)
                } else {
                    return (
                        <>
                            <AppWebView source={url}/>
                            <Loading/>
                        </>
                    )
                }
            }
            case "WEBVIEW": {
                return (
                        <AppWebView source={url}/>
                )
            }
        }
    }, [appState, url, token]);

    const additional = useMemo(() => {
        if(appState === "WEBVIEW") {
            if(showCamera){
                return (
                    <Camera cameraMode={"CAMERA"} show={true}/>
                )
            }
        }
    }, [appState, showCamera]);
    console.log(mainContent);
    console.log(context);
    return (
        <>
            {mainContent}
            {additional}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});

export default Container;
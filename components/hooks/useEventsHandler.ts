import {WebView, WebViewMessageEvent} from "react-native-webview";
import {useCallback, useContext, useMemo} from "react";
import useNativeEventsListener from "qw-rerp-native-events/dist/cjs/use-native-listener/useNativeEventsListener";
import {
    BARCODE_SCANNER_INIT,
    CAMERA_INIT,
    EmitterEvents,
    WEBVIEW_INIT,
} from "qw-rerp-native-events/dist/cjs/native-events-types";
import {requestTypeSelector} from "qw-rerp-native-events/dist/cjs/service/service";
import {AppContext} from "../context/AppContext";

type useEventsHandlerType = {
    getMessage: (e: WebViewMessageEvent) => void,
    eventListener: (webView: WebView, resetTimer: number) => void,
    setResponseTimer: (timeOut: number) => ReturnType<typeof setTimeout>
}

const useEventsHandler = (): useEventsHandlerType => {
    const appContext = useContext(AppContext);
    const {setAppState, token, url, setUrl, setShowCamera} = appContext;
    const {webViewEmitter} = useNativeEventsListener();

    const getMessage = useCallback(
        (e: WebViewMessageEvent) => {
            const request = requestTypeSelector(e.nativeEvent.data);
            webViewEmitter.emit(request.type as keyof EmitterEvents, request.data)
        },
        []
    );

    const eventListener = useCallback((webView: WebView, resetTimer: number) => {
        if(!token || ! url){
            return;
        }

        webViewEmitter.on(WEBVIEW_INIT as keyof EmitterEvents, e => {
            setAppState("WEBVIEW");
            clearInterval(resetTimer);
            // storeData().catch(console.log);
        })
        webViewEmitter.on(BARCODE_SCANNER_INIT as keyof EmitterEvents, e => {
            console.log("SCANNER")
            setAppState("BARCODE_SCANNER");
        })
        webViewEmitter.on(CAMERA_INIT as keyof EmitterEvents, e => {
            setShowCamera(true);
        })
    }, [token, url]);

    const setResponseTimer = useCallback((timeOut: number) => {
        let timer: number = setTimeout(() => {
            setUrl(null);
        }, timeOut)
        return timer;
    }, [url])

    return {getMessage, eventListener, setResponseTimer};
}

export default useEventsHandler;
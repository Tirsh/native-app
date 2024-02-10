import {useContext, useEffect, useRef, useState} from "react";
import {WebView, WebViewNavigation} from "react-native-webview";
import useEventsHandler from "../hooks/useEventsHandler";
import * as NavigationBar from "expo-navigation-bar";
import {AppContext} from "../context/AppContext";

const useWebView = (webView: WebView | null) => {
    const {url, token, appState, setAppState, webViewHidden, setWebViewHidden} = useContext(AppContext);
    // const [addCookies, setAddCookies] = useState("");
    const [stateWebView, setStateWebView] = useState<WebViewNavigation | null>(null);
    const {getMessage, eventListener, setResponseTimer} = useEventsHandler();
    useEffect(() => {
        NavigationBar.setVisibilityAsync("hidden");
        setWebViewHidden(true);
        if (appState === 'WEBVIEW') {
            setWebViewHidden(false);
        }
    }, []);

    useEffect(() => {
        const resetTimer = setResponseTimer(8000);
        if (webView) {
            eventListener(webView, resetTimer);
        }
    }, [webView]);

    // useEffect(() => {
    //     if (!stateWebView || !token) {
    //         return;
    //     }
    //
    //     if( stateWebView.url.match(/https?:\/\/[^\s^\/]+/)[0] === url.match(/https?:\/\/[^\s^\/]+/)[0]) {
    //         setAddCookies(`document.cookie = "RERP-PRO-TOKEN-DATA=${token}`);
    //     }
    // }, [token, stateWebView])

    return {
        // cookies: addCookies,
        getMessage,
        isHidden: webViewHidden
    }
}

export default useWebView;
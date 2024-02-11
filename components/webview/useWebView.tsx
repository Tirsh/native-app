import {useContext, useEffect, useRef, useState} from "react";
import {WebView, WebViewNavigation} from "react-native-webview";
import useEventsHandler from "../hooks/useEventsHandler";
import * as NavigationBar from "expo-navigation-bar";
import {AppContext} from "../context/AppContext";

const useWebView = () => {
    const {url, token, appState} = useContext(AppContext);

    const [webView, setWebView] = useState<WebView | null>(null);
    const [addCookies, setAddCookies] = useState("");
    const [webViewState, setWebViewState] = useState<WebViewNavigation | null>(null);
    const {getMessage, eventListener, setResponseTimer} = useEventsHandler();
    useEffect(() => {
        NavigationBar.setVisibilityAsync("hidden");
    }, []);

    useEffect(() => {
        if (webView) {
            const resetTimer = setResponseTimer(8000);
            eventListener(webView, resetTimer);
        }
    }, [webView]);


    useEffect(() => {
        if (appState != "WEBVIEW") {
            return;
        }
        if (!webViewState || !token) {
            return;
        }
        const currentUrl = webViewState.url.match(/https?:\/\/[^\s^\/]+/);
        if( currentUrl[0] === url.match(/https?:\/\/[^\s^\/]+/)[0]) {
            setAddCookies(`document.cookie = "RERP-PRO-TOKEN-DATA=${token}`);
        }
    }, [appState])

    return {
        cookies: addCookies,
        setWebView,
        getMessage,
        setWebViewState
    }
}

export default useWebView;
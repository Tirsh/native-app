import {WebView} from 'react-native-webview';
import {StatusBar, StyleSheet} from "react-native";
import React, {useRef} from "react";
import useWebView from "./useWebView";

interface AppWebViewProps {
    source: string;
}

export const AppWebView: React.FC<AppWebViewProps> = ({source}) => {
    const webView = useRef<WebView | null>(null);
    const {getMessage, isHidden} = useWebView(webView.current);
    console.log("WebView render");
    isHidden ? console.log("wv hidden") : console.log("wv shown");

    return (
        <WebView
            ref={webView}
            style={styles.container}
            onMessage={getMessage}
            // injectedJavaScript={cookies}
            source={{uri: source}}
            sharedCookiesEnabled={true}
            // onNavigationStateChange={(state) => setStateWebView(state)}
        >
            <StatusBar hidden={true}/>

        </WebView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
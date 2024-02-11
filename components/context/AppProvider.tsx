import {FC, useEffect, useMemo, useState} from "react";
import {AppContext} from "./AppContext";
import * as SecureStore from 'expo-secure-store';

export type AppState = 'BARCODE_SCANNER' | 'AUTHORIZATION' | "WEBVIEW";

const AppProvider: FC = ({children}) => {
    const [appState, setAppState] = useState<AppState>('AUTHORIZATION');
    const [loading, setLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);
    const [showCamera, setShowCamera] = useState(false);

    useEffect(() => {
        const loadDataAsync = async () => {
            let userToken, url;
            try {
                userToken = await SecureStore.getItemAsync('userToken');
                url = await SecureStore.getItemAsync('qwUrl');
            } catch (e) {
                console.log(e);
            }
            setToken(userToken);
            setUrl(url);
        };
        loadDataAsync();
    }, [])

    const contextValues = useMemo(() => {
        return {
            appState,
            setAppState,
            loading,
            setLoading,
            token,
            setToken,
            url,
            setUrl,
            showCamera,
            setShowCamera
        }
    }, [appState, url, token, showCamera])
    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
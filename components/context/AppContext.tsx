import React, {createContext} from 'react';
import {AppState} from "./AppProvider";

interface AppContextProps {
    appState: AppState;
    setAppState: (state: AppState) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    token: string | null;
    setToken: (token: string | null) => void;
    url: string | null;
    setUrl: (url: string | null) => void;
    webViewHidden: boolean;
    setWebViewHidden: (hidden: boolean) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);
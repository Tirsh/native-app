import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from "./components/context/AppProvider";
import Login from "./components/login/Login";
import Camera from "./components/camera/Camera";
import {AppWebView} from "./components/webview/AppWebView";
import Container from "./components/container/Container";
import Loading from "./components/webview/Loading";

export default function App() {
  return (
      <AppProvider>
          <Container/>
      </AppProvider>
  );
}

import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => (
    <View style={[styles.container, styles.vertical]}>
        <ActivityIndicator size={50} color="#800080" />
        <Text style={styles.info}>Loading, please wait...</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#ffffff",
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    vertical: {
        justifyContent: 'center',
        padding: 10,
        gap: 20,
    },
    info: {
        color: '#800080',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,

    }
});

export default Loading;
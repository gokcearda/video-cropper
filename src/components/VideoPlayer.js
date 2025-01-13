// src/components/VideoPlayer.js
import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';

export default function VideoPlayer({ uri, onLoad, startTime = 0 }) {
    if (!uri) {
        console.error('VideoPlayer: uri prop is missing or invalid.');
        return null;
    }

    return (
        <Video
            source={{ uri }}
            style={styles.video}
            onLoad={onLoad}
            positionMillis={startTime * 1000}
            shouldPlay
            useNativeControls
            resizeMode="contain"
            onError={(error) => console.error('VideoPlayer hata:', error)}
        />
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 200,
    },
});
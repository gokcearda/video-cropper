// src/components/VideoPlayer.js
import React from 'react';
import { Video } from 'expo-av';
import { styled } from 'nativewind';

const StyledVideo = styled(Video);

export default function VideoPlayer({ uri, onLoad, startTime = 0 }) {
    if (!uri) {
        console.error('VideoPlayer: uri prop is missing or invalid.');
        return null;
    }

    return (
        <StyledVideo
            source={{ uri }}
            className="w-full h-[200px]"
            onLoad={onLoad}
            positionMillis={startTime * 1000}
            shouldPlay
            useNativeControls
            resizeMode="contain"
            onError={(error) => console.error('VideoPlayer hata:', error)}
        />
    );
}
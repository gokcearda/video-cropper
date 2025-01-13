// src/components/CropScrubber.js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import VideoPlayer from './VideoPlayer';

export default function CropScrubber({ video, onCropSettingsChange }) {
    const [startTime, setStartTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    console.log('CropScrubber video URI:', video);

    const handleLoad = (playbackStatus) => {
        if (playbackStatus.durationMillis) {
            setVideoDuration(playbackStatus.durationMillis / 1000);
        }
    };

    const handleNext = () => {
        onCropSettingsChange({ startTime, duration: 5 });
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <VideoPlayer uri={video} onLoad={handleLoad} startTime={startTime} />
            <Text>Başlangıç Zamanı: {startTime.toFixed(2)} sn</Text>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={Math.max(0, videoDuration - 5)}
                value={startTime}
                onValueChange={setStartTime}
            />
            <Button title="Devam Et" onPress={handleNext} />
        </View>
    );
}
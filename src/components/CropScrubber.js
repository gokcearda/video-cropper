// src/components/CropScrubber.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        <View className="flex-1 p-4">
            <VideoPlayer uri={video} onLoad={handleLoad} startTime={startTime} />
            <Text className="mt-4 mb-2">Başlangıç Zamanı: {startTime.toFixed(2)} sn</Text>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={Math.max(0, videoDuration - 5)}
                value={startTime}
                onValueChange={setStartTime}
            />
            <TouchableOpacity
                onPress={handleNext}
                className="mt-4 bg-blue-500 rounded p-3"
            >
                <Text className="text-white text-center font-semibold">Devam Et</Text>
            </TouchableOpacity>
        </View>
    );
}
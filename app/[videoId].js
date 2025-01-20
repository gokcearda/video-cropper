// app/[videoId].js
import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useVideoStore } from '../src/store/videStore';
import VideoPlayer from '../src/components/VideoPlayer';

export default function DetailScreen() {
    const { videoId } = useLocalSearchParams();
    const video = useVideoStore((state) =>
        state.videos.find((v) => v.id === videoId)
    );

    if (!video) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Video bulunamadı.</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white">
            <View className="w-full h-[300px]">
                <VideoPlayer uri={video.uri} />
            </View>
            <View className="p-4">
                <Text className="text-2xl font-bold mb-2">{video.name}</Text>
                <Text className="text-base text-gray-600 leading-6">{video.description}</Text>
            </View>
        </View>
    );
}
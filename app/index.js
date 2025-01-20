// app/index.js

import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import VideoItem from '../src/components/VideoItem';
import { useVideoStore } from '../src/store/videStore';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const videos = useVideoStore((state) => state.videos);
    const loadVideos = useVideoStore((state) => state.loadVideos);
    const removeVideo = useVideoStore((state) => state.removeVideo);
    const router = useRouter();

    useEffect(() => {
        loadVideos();
    }, []);

    const handleDelete = (id) => {
        Alert.alert(
            'Videoyu Sil',
            'Bu videoyu silmek istediğinize emin misiniz?',
            [
                { text: 'İptal', style: 'cancel' },
                { text: 'Evet', onPress: () => removeVideo(id) },
            ],
            { cancelable: false }
        );
    };

    return (
        <View className="flex-1">
            {videos.length === 0 ? (
                <View className="flex-1 justify-center items-center">
                    <Text>Henüz video eklemediniz.</Text>
                </View>
            ) : (
                <FlatList
                    data={videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <VideoItem
                            video={item}
                            onPress={() => router.push(`/${item.id}`)}
                            onEdit={() => router.push(`/edit/${item.id}`)}
                            onDelete={() => handleDelete(item.id)}
                        />
                    )}
                />
            )}
            <TouchableOpacity
                onPress={() => router.push('/modal/crop')}
                className="bg-blue-500 rounded-full px-6 py-4 m-4"
                activeOpacity={0.8}
            >
                <Text className="text-white text-center text-lg font-semibold">
                    Video Ekle
                </Text>
            </TouchableOpacity>
        </View>
    );
}
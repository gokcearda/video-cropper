// app/index.js

import React, { useEffect } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
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
        <View style={{ flex: 1 }}>
            {videos.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <Button
                title="Video Ekle"
                onPress={() => router.push('/modal/crop')}
            />
        </View>
    );
}
// app/edit/[videoId].js

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useVideoStore } from '../../src/store/videStore';

export default function EditVideoScreen() {
    const { videoId } = useLocalSearchParams();
    const router = useRouter();

    const video = useVideoStore((state) =>
        state.videos.find((v) => v.id === videoId)
    );
    const updateVideo = useVideoStore((state) => state.updateVideo);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (video) {
            setName(video.name);
            setDescription(video.description);
        }
    }, [video]);

    const handleSave = async () => {
        await updateVideo(videoId, { name, description });
        Alert.alert('Başarılı', 'Video bilgileri güncellendi.', [
            { text: 'Tamam', onPress: () => router.push(`/${videoId}`) },
        ]);
    };

    return (
        <View className="p-4">
            <TextInput
                placeholder="İsim"
                value={name}
                onChangeText={setName}
                className="border border-gray-400 rounded p-2 mb-3"
            />
            <TextInput
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
                multiline
                className="border border-gray-400 rounded p-2 mb-3 h-[100px]"
                style={{ textAlignVertical: 'top' }}
            />
            <TouchableOpacity onPress={handleSave} className="bg-blue-500 rounded p-2 mt-2">
                <Text className="text-white text-center font-semibold">Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}
// src/components/VideoPicker.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function VideoPicker({ onSelect }) {
    const pickVideo = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Video seçmek için izin vermeniz gerekiyor.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: false,
        });

        console.log('VideoPicker Result:', result);

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const videoUri = result.assets[0].uri;
            console.log('Selected Video URI:', videoUri);
            onSelect(videoUri);
        } else {
            console.log('Video seçimi iptal edildi veya hata oluştu.');
        }
    };

    return (
        <View className="justify-center items-center bg-white">
            <TouchableOpacity
                onPress={pickVideo}
                className="bg-blue-50 rounded-full px-6 py-3 shadow-lg"
                activeOpacity={0.8}
            >
                <Text className="text-white text-lg font-bold">Video Seç</Text>
            </TouchableOpacity>
        </View>
    );
}
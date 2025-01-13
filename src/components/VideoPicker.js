// src/components/VideoPicker.js
import React from 'react';
import { View, Button } from 'react-native';
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
        <View>
            <Button title="Video Seç" onPress={pickVideo} />
        </View>
    );
}
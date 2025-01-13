// app/edit/[videoId].js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
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
        <View style={styles.container}>
            <TextInput
                placeholder="İsim"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
                multiline
                style={[styles.input, styles.textArea]}
            />
            <Button title="Kaydet" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
});
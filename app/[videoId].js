// app/[videoId].js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <View style={styles.centered}>
                <Text>Video bulunamadı.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <VideoPlayer uri={video.uri} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{video.name}</Text>
                <Text style={styles.description}>{video.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    video: {
        width: '100%',
        height: 300,
    },
    infoContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#555555',
        lineHeight: 24,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
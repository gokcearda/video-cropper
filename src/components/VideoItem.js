// src/components/VideoItem.js

import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function VideoItem({ video, onPress, onEdit, onDelete }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <Text style={styles.title}>{video.name}</Text>
                <Text style={styles.description}>{video.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Düzenle" onPress={onEdit} />
                {/* <Button title="Sil" onPress={onDelete} color="red" /> --This button is in the comments section because it is not working until the next update.---*/}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
    },
});

// src/components/VideoItem.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function VideoItem({ video, onPress, onEdit, onDelete }) {
    return (
        <TouchableOpacity onPress={onPress} className="p-4 border-b border-gray-300">
            <View>
                <Text className="text-lg font-bold">{video.name}</Text>
                <Text className="mt-1 text-sm text-gray-600">{video.description}</Text>
            </View>
            <View className="flex-row mt-2 justify-between">
                <TouchableOpacity onPress={onEdit} className="bg-blue-500 rounded px-4 py-2">
                    <Text className="text-white font-semibold">Düzenle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} className="bg-red-500 rounded px-4 py-2">
                    <Text className="text-white font-semibold">Sil</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
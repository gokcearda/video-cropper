// app/_layout.js
import { Stack } from 'expo-router';
import { createVideosTable } from '../src/database/database';
import { useEffect } from 'react';
import { View } from 'react-native';
export default function Layout() {
    useEffect(() => {
        createVideosTable();
    }, []);

    return (
        <View className="flex-1 bg-white">
            <Stack
                screenOptions={{
                    headerTitleAlign: 'center',
                }}
            />
        </View>
    );
}
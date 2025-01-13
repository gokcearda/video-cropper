// app/_layout.js
import { Stack } from 'expo-router';
import { createVideosTable } from '../src/database/database';
import { useEffect } from 'react';

export default function Layout() {
    useEffect(() => {
        createVideosTable();
    }, []);

    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        />
    );
}
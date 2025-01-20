import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { metadataSchema } from '../utils/validationSchema';

export default function MetadataForm({ onSubmit, isSubmitting }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        const result = metadataSchema.safeParse({ name, description });
        if (!result.success) {
            const formattedErrors = result.error.errors.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
        } else {
            setErrors({});
            onSubmit({ name, description });
        }
    };

    return (
        <View className="p-4">
            <TextInput
                placeholder="İsim"
                value={name}
                onChangeText={setName}
                className="border border-gray-400 rounded p-2 mb-3"
            />
            {errors.name && <Text className="text-red-500 mb-2">{errors.name}</Text>}
            <TextInput
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
                multiline
                className="border border-gray-400 rounded p-2 mb-3 h-[100px]"
                style={{ textAlignVertical: 'top' }}
            />
            {errors.description && (
                <Text className="text-red-500 mb-2">{errors.description}</Text>
            )}
            <TouchableOpacity
                onPress={handleSubmit}
                disabled={isSubmitting}
                className={`bg-blue-500 rounded p-3 mt-2 ${
                    isSubmitting ? 'opacity-50' : ''
                }`}
            >
                <Text className="text-white text-center font-semibold">
                    {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
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
        <View style={styles.container}>
            <TextInput
                placeholder="İsim"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            <TextInput
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
                multiline
                style={[styles.input, styles.textArea]}
            />
            {errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
            )}
            <Button
                title={isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                onPress={handleSubmit}
                disabled={isSubmitting}
            />
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
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
});
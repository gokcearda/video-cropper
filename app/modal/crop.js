// app/modal/crop.js
import React, { useState } from 'react';
import { View } from 'react-native';
import VideoPicker from '../../src/components/VideoPicker';
import CropScrubber from '../../src/components/CropScrubber';
import MetadataForm from '../../src/components/MetadataForm';
import { useRouter } from 'expo-router';
import { cropVideo } from '../../src/utils/ffmpegUtils';
import { useVideoStore } from '../../src/store/videStore';

export default function CropModal() {
    const [step, setStep] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [cropSettings, setCropSettings] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const addVideo = useVideoStore((state) => state.addVideo);

    const handleVideoSelect = (video) => {
        console.log('Selected Video URI:', video);
        setSelectedVideo(video);
        setStep(2);
    };

    const handleCropSettings = (settings) => {
        console.log('Crop Settings:', settings);
        setCropSettings(settings);
        setStep(3);
    };

    const handleMetadataSubmit = async (metadata) => {
        console.log('Metadata:', metadata);
        setIsSubmitting(true);
        try {
            const croppedVideoUri = await cropVideo(
                selectedVideo,
                cropSettings.startTime,
                cropSettings.duration
            );

            const videoData = {
                id: Date.now().toString(),
                uri: croppedVideoUri,
                ...metadata,
            };

            await addVideo(videoData);

            router.back();
        } catch (error) {
            alert('Video kırpma işlemi başarısız oldu.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {step === 1 && <VideoPicker onSelect={handleVideoSelect} />}
            {step === 2 && (
                <CropScrubber
                    video={selectedVideo}
                    onCropSettingsChange={handleCropSettings}
                    isSubmitting={isSubmitting}
                />
            )}
            {step === 3 && (
                <MetadataForm
                    onSubmit={handleMetadataSubmit}
                    isSubmitting={isSubmitting}
                />
            )}
        </View>
    );
}
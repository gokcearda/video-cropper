// src/services/videoService.js
import { useMutation } from '@tanstack/react-query';
import { cropVideo } from '../utils/ffmpegUtils';
import { useVideoStore } from '../store/videStore';

export function useCropVideo() {
    const addVideo = useVideoStore((state) => state.addVideo);

    return useMutation(async ({ videoUri, startTime, duration, metadata }) => {
        const croppedVideoUri = await cropVideo(
            videoUri,
            startTime,
            duration
        );

        const videoData = {
            id: Date.now().toString(),
            uri: croppedVideoUri,
            ...metadata,
        };
        await addVideo(videoData);

        return videoData;
    });
}
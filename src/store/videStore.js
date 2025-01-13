// src/store/videoStore.js
import { create } from 'zustand';
import { insertVideo, getAllVideos, deleteVideo, updateVideoInDatabase} from '../services/videoDatabaseService';

export const useVideoStore = create((set, get) => ({
    videos: [],
    addVideo: async (video) => {
        await insertVideo(video);
        const updatedVideos = await getAllVideos();
        set({ videos: updatedVideos });
    },
    loadVideos: async () => {
        const videos = await getAllVideos();
        set({ videos });
    },
    removeVideo: async (id) => {
        await deleteVideo(id);
        const videos = await getAllVideos();
        set({ videos });
    },
    updateVideo: async (id, data) => {
        await updateVideoInDatabase(id, data);
        const videos = await getAllVideos();
        set({ videos });
    },
}));
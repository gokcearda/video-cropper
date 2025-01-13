// src/services/videoDatabaseService.js
import { openDatabase } from '../database/database';

export const insertVideo = async (videoData) => {
    const db = await openDatabase();
    const { id, uri, name, description } = videoData;

    await db.execAsync(`INSERT INTO videos (id, uri, name, description) VALUES ('${id}', '${uri}', '${name}', '${description}');`);
};

export const getAllVideos = async () => {
    const db = await openDatabase();
    const result = await db.execAsync('SELECT * FROM videos;');


    const statement = await db.prepareAsync('SELECT * FROM videos;');
    const resultSet = await statement.executeAsync();
    const rows = [];

    for await (const row of resultSet) {
        rows.push(row);
    }

    await statement.finalizeAsync();
    return rows;
};

export const deleteVideo = async (id) => {
    const db = await openDatabase();
    await db.execAsync(`DELETE FROM videos WHERE id = '${id}';`);
};

export const updateVideoInDatabase = async (id, data) => {
    const db = await openDatabase();
    const { name, description } = data;
    await db.execAsync(`UPDATE videos SET name = '${name}', description = '${description}' WHERE id = '${id}';`);
};
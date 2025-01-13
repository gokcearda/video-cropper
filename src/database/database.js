// src/database/database.js
import * as SQLite from 'expo-sqlite';

let db;

export const openDatabase = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync('videos.db');
    }
    return db;
};

export const createVideosTable = async () => {
    const db = await openDatabase();
    await db.execAsync('CREATE TABLE IF NOT EXISTS videos (id TEXT PRIMARY KEY NOT NULL, uri TEXT, name TEXT, description TEXT);');
};

export default openDatabase;
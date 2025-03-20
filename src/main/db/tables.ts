/*
 * @Author: Salaing
 * @Date: 2025-03-20 19:43:44
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-20 23:54:11
 * @Description: file content
 */
import { db } from './connect'

db.exec(`
        create table if not exists categories (
            id integer primary key autoincrement not null,
            name text not null,
            created_at text not null
        );
    `)
db.exec(`
        create table if not exists contents (
            id integer primary key autoincrement not null,
            title text not null,
            content text not null,
            category_id integer,
            created_at text not null,
            updated_at text not null
        );
    `)
db.exec(`
        INSERT INTO categories (name, created_at) VALUES ('默认分类', datetime('now', 'localtime'))
    `)
db.exec(`
        INSERT INTO contents (title, content, category_id, created_at, updated_at) VALUES ('默认内容', '默认内容', 1, datetime('now','localtime'), datetime('now', 'localtime'))
    `)

/*
 * @Author: Salaing
 * @Date: 2025-03-20 19:43:44
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-08 23:02:52
 * @Description: file content
 */
import { db } from './connect'
import { Random } from 'mockjs'
import { findOne } from './query'

export function initTable() {
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
  create table if not exists config (
    id integer primary key autoincrement not null,
    content text not null
  ); 
`)
  initData()
}

function initData() {
  const isInit = findOne(`select * from contents`)
  if (isInit) return
  db.exec(`
     INSERT INTO config (content) VALUES('{"shortCut":"Alt+Space","databaseDirectory":"df"}')
`)
  for (let i = 0; i <= 10; i++) {
    const title = Random.ctitle(5, 10)
    db.exec(`
              INSERT INTO categories (name, created_at) VALUES ('${title}', datetime('now', 'localtime'))
          `)
    for (let j = 1; j < 10; j++) {
      const title = Random.ctitle(5, 10)
      const content = Random.cparagraph(1, 10)
      db.exec(`
                      INSERT INTO contents (title, content, category_id, created_at, updated_at)
                       VALUES ('${title}', '${content}', ${j}, datetime('now','localtime'), datetime('now', 'localtime'))
                  `)
    }
  }
}
initTable()

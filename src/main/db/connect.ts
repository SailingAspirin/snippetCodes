import Database, * as BetterSqlit3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'

const file = resolve(app.getPath('home'), 'Desktop', 'snippet.db')
const db: BetterSqlit3 = new Database(file, {})

//
db.pragma('journal_mode = WAL')

export { db }

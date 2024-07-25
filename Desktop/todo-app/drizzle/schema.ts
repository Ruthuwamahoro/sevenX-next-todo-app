import {pgTable, varchar, uuid} from 'drizzle-orm/pg-core';

export  const userTable = pgTable("User",{
    id: uuid('id').primaryKey().defaultRandom(),
    tasks: varchar('tasks', {length: 255}).notNull(),
})
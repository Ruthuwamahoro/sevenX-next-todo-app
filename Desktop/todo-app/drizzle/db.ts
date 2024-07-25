import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import postgres from 'postgres';

const client = postgres('postgres://default:Sg5YD0RwpNZe@ep-holy-sea-a4uobnt9-pooler.us-east-1.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require')
export const db = drizzle(client, { schema, logger: true});

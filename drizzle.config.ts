import { defineConfig } from 'drizzle-kit';
import 'dotenv/config'

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgres://default:Sg5YD0RwpNZe@ep-holy-sea-a4uobnt9-pooler.us-east-1.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require'
  },
  verbose: true,
  strict: true,
});

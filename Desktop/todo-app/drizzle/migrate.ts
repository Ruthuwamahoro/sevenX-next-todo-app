import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config'
const migrationClient = postgres(process.env.POSTGRES_PRISMA_URL!, { max: 1 });

async function main(){
    await migrate(drizzle(migrationClient), {
        migrationsFolder: './drizzle/migrations'
    })
    migrationClient.end();
}
main();
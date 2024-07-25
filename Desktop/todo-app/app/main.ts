import { db } from '../drizzle/db';
import { userTable } from '@/drizzle/schema';
async function main(){
    await db.insert(userTable).values({
        name: "Ruth"
    })
    const user = await db.query.userTable.findFirst();
    console.log(user);
}
main()
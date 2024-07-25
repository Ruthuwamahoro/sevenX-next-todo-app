import { NextRequest, NextResponse } from 'next/server';
import { userTable } from "@/drizzle/schema";
import { db } from '@/drizzle/db';

export const POST = async (request: NextRequest) => {
    const requestBody = await request.json();
    const { tasks } = requestBody;

    if (!tasks || typeof tasks !== 'string') {
        return NextResponse.json({ message: 'Invalid tasks input' }, { status: 400 });
    }

    try {
        await db.insert(userTable).values({ tasks });
        return NextResponse.json({ message: 'Tasks inserted successfully' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};

export const GET = async(request:NextRequest) => {
    try{
        const responseData =  await db.select().from(userTable)
        return NextResponse.json({status: 200,data: responseData})
    } catch(error){
        console.log(error)
        NextResponse.json({message: "Error in getting message "})
    }
    
}
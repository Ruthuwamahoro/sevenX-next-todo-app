import {NextResponse, NextRequest } from 'next/server';
import { userTable } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { eq } from 'drizzle-orm';

export const PATCH = async(req: NextRequest, {params}: {params: {id: string}}) => {
    const userId = params.id;
    console.log('iddd', userId);
    const requestBody = await req.json()
    const newData = requestBody;
    console.log('dataaaa', newData);
    try{
        await db.update(userTable).set(newData).where(eq(userTable.id, userId))
        NextResponse.json({message: 'successfully updated', status: 200})
    } catch(err){
        NextResponse.json({message: 'Failed to update data', status: 400})
    }
    await db.update(userTable).set(newData).where(eq(userTable.id, userId));
    return NextResponse.json({message: 'successfully updatedData',status: 200})
}
export const DELETE = async(res: NextResponse,{params}: {params: {id: string}}) => {
    const userId = params.id;
    try{
         const result = await db.delete(userTable).where(eq(userTable.id, userId))
        return NextResponse.json({message: 'successfully deleted', status: 200, data: result})
    } catch(err){
        return NextResponse.json({message: 'Failed to delete data', status: 400})
    }
}

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const userId = params.id;

    if (!userId) {
        return NextResponse.json({ message: 'User ID is required', status: 400 });
    }

    try {
        const result = await db.select().from(userTable).where(eq(userTable.id, userId));
        if (result.length === 0) {
            return NextResponse.json({ message: 'User not found', status: 404 });
        }

        return NextResponse.json({ status: 200, data: result });
    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
};

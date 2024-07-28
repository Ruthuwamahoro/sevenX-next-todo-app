import { NextResponse, NextRequest } from 'next/server';
import { taskTable } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { and, eq } from 'drizzle-orm';
import { auth } from '@/auth';

export const PATCH = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized', status: 401 });
    }
    const userId = session.user.id;
    const taskId = params.id;
    const requestBody = await request.json();
    const newData = requestBody;

    try {
        await db.update(taskTable).set(newData).where(and(eq(taskTable.id, taskId), eq(taskTable.userId, userId)));
        return NextResponse.json({ message: 'Successfully updated', status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Failed to update data', status: 400 });
    }
};

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized', status: 401 });
    }
    const userId = session.user.id;
    const taskId = params.id;

    try {
        const result = await db.delete(taskTable).where(and(eq(taskTable.id, taskId), eq(taskTable.userId, userId)));
        return NextResponse.json({ message: 'Successfully deleted', status: 200, data: result });
    } catch (err) {
        return NextResponse.json({ message: 'Failed to delete data', status: 400 });
    }
};

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const userId = params.id;

    if (!userId) {
        return NextResponse.json({ message: 'User ID is required', status: 400 });
    }

    try {
        const result = await db.select().from(taskTable).where(eq(taskTable.id, userId));
        if (result.length === 0) {
            return NextResponse.json({ message: 'User not found', status: 404 });
        }

        return NextResponse.json({ status: 200, data: result });
    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
};

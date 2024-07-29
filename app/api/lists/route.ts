import { NextRequest, NextResponse } from 'next/server';
import { taskTable } from "@/drizzle/schema";
import { db } from '@/drizzle/db';
import { auth } from "@/auth";
import { and, eq } from 'drizzle-orm';

export const POST = async (request: NextRequest) => {
    const requestBody = await request.json();
    const { tasks } = requestBody;

    if (!tasks || typeof tasks !== 'string') {
        return NextResponse.json({ message: 'Invalid tasks input' }, { status: 400 });
    }

    try {
        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
        }

        const userId = session.user.id;
        const result = await db.insert(taskTable).values({ tasks, userId }).returning();
        return NextResponse.json({ message: 'Tasks inserted successfully', data: result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};

export const GET = async (request: NextRequest) => {
    const session = await auth();
    if (!session) {
        return NextResponse.redirect('/api/auth/signin');
    }
    const userId = session.user.id;

    try {
        const result = await db.select().from(taskTable).where(eq(taskTable.userId, userId));
        return NextResponse.json({ status: 200, data: result });
    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
};

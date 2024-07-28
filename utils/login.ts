import { auth } from '@/auth';

export const getUserSession = async () => {
  try {
    const session = await auth();
    return {
        name: session?.user?.name || 'Guest',
        email: session?.user?.email || '',
        image: session?.user?.image || '',
    };
  } catch (error) {
    console.error('Failed to fetch session:', error);
    return {
        email: 'uwamarith@gmail.com',
        name: 'Gueest',
        image: '',
    };
  }
};

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUserSession } from '@/utils/login';

const Profile = () => {
  const [user, setUser] = useState<{ name: string; image: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserSession();
        setUser(userData);
      } catch (err) {
        setError('Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <>
      <h1>{user.name}</h1>
      <Image 
        src={user.image} 
        alt="My Image" 
        width={75} 
        height={75} 
        style={{ borderRadius: '50%' }} 
      />
    </>
  );
}

export default Profile;

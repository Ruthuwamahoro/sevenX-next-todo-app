import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ModeToggle } from './ModeToggle';

interface User {
  name: string;
  image?: string;
  email: string;
}

interface NavBarProps {
  user?: User;
}

export const NavBar: React.FC<NavBarProps> = ({ user }) => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            {user?.image ? (
              <Image
                src={user.image}
                alt="User Image"
                width={45}
                height={45}
                style={{ borderRadius: '50%' }}
              />
            ) : (
              <FaUserCircle size={45} />
            )}
            <h4 className="font-semibold px-4">{user?.name || 'Guest'}</h4>
            {user && <p className="px-4">{user.email}</p>}
          </MenubarTrigger>

          <ModeToggle />
          <MenubarContent>
            <MenubarItem>
              <Link href={user?.name==='Guest' ? '/api/auth/signin' : '/api/auth/signout'}>
                {user?.name==='Guest' ? 'Login' : 'Logout'}
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

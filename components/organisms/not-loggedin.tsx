'use client';
import DiscordLogin from '../molecules/discord-login';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const NotLoggedIn = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="m-auto items-center flex justify-center gap-4 ">
      <p className="text-3xl font-semibold">Please sign in</p>
      <DiscordLogin session={session}/>
    </div>
  );
};

export default NotLoggedIn;

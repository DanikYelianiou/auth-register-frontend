import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import axios from 'axios';

const UserProvider = ({ children }: any) => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return null;
  if (!loading && !session && !router.pathname.includes('/auth')) {
    axios.defaults.headers.common.Authorization = '';
    router.push('/auth');
  }
  if (session?.jwt) axios.defaults.headers.common.Authorization = `Bearer ${session.jwt}`;
  return children;
};

export default UserProvider;

import { useSelector } from 'react-redux';

const useLoggedIn = () => {
  const loggedIn = useSelector(({ session }) => Boolean(session.currentUserId));
  return [loggedIn];
}

export default useLoggedIn;
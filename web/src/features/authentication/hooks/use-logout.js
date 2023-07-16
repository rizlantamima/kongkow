import { useState } from 'react';

const useLogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setIsLoggingOut(true);
    // Todo :
    setIsLoggingOut(false);
  };

  return { logout, isLoggingOut, isLoggedOut, error };
};

export default useLogout;

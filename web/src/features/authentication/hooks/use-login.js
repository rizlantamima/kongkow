import { useContext, useState } from 'react';
import { FirebaseContext } from '../../../context/firebase-context';

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState(null);
    const fbApp = useContext(FirebaseContext);

    const login = async (email, password, authService) => {
        setIsLoggingIn(true);
        try {
            await authService.login(email, password, fbApp);
            setIsLoggedIn(true);
            setError(null);
        } catch (error) {
            setIsLoggedIn(false);
            setError(error.message);
        }
        setIsLoggingIn(false);
    };


    return { login, isLoggingIn, isLoggedIn, error };
};

export default useLogin;
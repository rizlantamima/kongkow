import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SetApiToken } from "../../../../utils/auth-cookie";

export default async function FirebaseManualLogin(email, password, fbApp)  {
    try {
      const auth = getAuth(fbApp);
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      const dataToken = credentials.user.stsTokenManager;
      SetApiToken(dataToken.accessToken, new Date(dataToken.expirationTime));
      return true;
    } catch (error) {
      console.error(error.message);
      throw new Error('Invalid email or password');
    }
  };
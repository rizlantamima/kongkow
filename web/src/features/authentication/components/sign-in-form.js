import { useState } from "react";
import useLogin from "../hooks/use-login";
import { appUsingFirebase } from "../../../configurations/app"

import { AlertError, StdButton, CircularProgressBar, StdInput } from "../../../components";
import FirebaseManualLogin from "../services/firebase/sign-in";
import RestApiSignIn from "../services/api/sign-in";
import LayoutAuthentication from "./layout";

export default function SignInForm(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLoggingIn, error } = useLogin();

    const SignInManually = async (e) => {
        e.preventDefault();
        let serviceImplementation = FirebaseManualLogin
        if (!appUsingFirebase) {
            serviceImplementation = RestApiSignIn
        }
        await login(email, password, serviceImplementation);

    }
    const SignInByGoogle = (e) => {
        e.preventDefault();
    }

    return (
        <LayoutAuthentication title="Log In to Kongkow" subtitle="First of all, enter your email address" className="mx-auto p-4 w-full xl:w-3/4">
            <AlertError>
                {error}
            </AlertError>
            <form action="#" method="post">
                <div className="mt-2">
                    <StdInput type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-2">
                    <StdInput type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-2">
                    <StdButton
                        className="w-full h-11"
                        disabled={isLoggingIn}
                        onClick={SignInManually}>
                        {isLoggingIn ? <CircularProgressBar color="white" /> : "Continue"}
                    </StdButton>
                </div>
            </form>
            <div className="mt-4 mx-auto w-3/4 flex justify-center items-center gap-8">
                <hr className="flex-grow border-b" />
                <div className="text-center">OR</div>
                <hr className="flex-grow border-b" />
            </div>
            <div className="mt-3">
                <StdButton
                    className="w-full h-11 !bg-white !text-black border-2 hover:shadow-lg disabled:shadow-none"
                    disabled={isLoggingIn}
                    onClick={SignInByGoogle}>
                    {isLoggingIn ? <CircularProgressBar color="black" /> : "Continue With Google"}
                </StdButton>
            </div>
        </LayoutAuthentication>
    );
}
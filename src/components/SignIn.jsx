import { useState } from "react";
import { auth } from "../config/fire-base";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { googleProvider } from "../config/fire-base";

export const SignIn = () => {

    const [ email, SetEmail ] = useState("");
    const [ password, SetPassword ] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser.email);
        } catch (error) {
            console.log(error);
        }
    }  

    const signInGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log(auth.name);
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <input type="email" placeholder="enter email" onChange={ (e) => SetEmail(e.target.value) } />
                <input type="password" placeholder="enter password" onChange={ (e) => SetPassword(e.target.value) } />
                <button type="submit" onClick={signIn} >SignIn</button>
                <button type="submit" onClick={signInGoogle}> Google Sign In</button>
                <button type="submit" onClick={logOut}>Log Out</button>
            </div>
        </>
    )
}
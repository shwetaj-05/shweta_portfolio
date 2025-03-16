import { useState } from "react";
import { auth } from "../config/fire-base";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { googleProvider } from "../config/fire-base";

export const LogIn = () => {

    const [ email, SetEmail ] = useState("");
    const [ password, SetPassword ] = useState("");

    const logIn = async () => {
        try {
            signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser.email);
        } catch (error) {
            console.log(error);
        }
    }  

    const logInGoogle = async () => {
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
            <input type="email" placeholder="enter email" onChange={ (e) => SetEmail(e.target.value) } />
            <input type="password" placeholder="enter password" onChange={ (e) => SetPassword(e.target.value) } />
            <button type="submit" onClick={logIn} >SignIn</button>
            <button type="submit" onClick={logInGoogle}> Google Sign In</button>
            <button type="submit" onClick={logOut}>Log Out</button>
        </>
    )
}
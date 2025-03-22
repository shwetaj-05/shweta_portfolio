import { useState, useEffect } from "react";
import { auth } from "../config/fire-base";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { googleProvider } from "../config/fire-base";
import { Link, useNavigate } from "react-router";
import "../styles/auth.css";

export const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const [isLogged, SetisLogged] = useState(false);
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email);
      SetisLogged(true);
    } catch (error) {
      SetError(error.code);
      console.log(error.code);
      console.log(error.message);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth.name);
      SetisLogged(true);
    } catch (error) {
      SetError(error.code);
      console.log(error.code);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isLogged) navigate("/home");
  }, [isLogged]);

  return (
    <div className="flex justify-center align-middle">
      <div className="mt-20 w-110 flex flex-col gap-5 justify-center align-middle border-1 p-10 bg-white/10 backdrop-blur-md">
        <input
          className="w-full p-3 text-2xl border-2 mt-4 mb-8 focus:border-transparent"
          type="email"
          placeholder="enter email"
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          className="p-3 text-2xl border-2 mt-4 mb-8 focus:border-amber-200 focus:ring-0 focus:border-transparent focus:shadow-none"
          type="password"
          placeholder="enter password"
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button className="text-4xl mb-4 h-12" type="submit" onClick={signIn}>
          Signin
        </button>
        <button
          className="flex items-center justify-center gap-2 p-3 text-2xl mb-3"
          type="submit"
          onClick={signInGoogle}
        >
          <img className="w-8 h-8" src="/assets/google.png" alt="Google Logo" />
          <span className="text-1.5xl flex-1 text-center">
            Sign in with Google
          </span>
        </button>

        <p>Already have an account? </p>
        <Link
          className="mb-4 h-12 px-5 py-3 text-center text-amber-300 text-base font-medium rounded-lg border border-transparent bg-[#1a1a1a] transition duration-200 hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-[auto]"
          to={"/login"}
        >
          {" "}
          Log in
        </Link>

        <p className="text-red-800">{error}</p>
      </div>
    </div>
  );
};

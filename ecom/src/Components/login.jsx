import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          console.log("Signup successful");
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex justify-center items-center h-full w-full bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="w-80 lg:h-96 lg:w-96 md:h-96 md:w-80 flex flex-col items-center py-10 rounded-lg border border-white shadow-2xl  ">
        <form
          className="flex flex-col  items-center space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-5xl font-bold text-center text-white ">
            {isSignIn ? "Login" : "Sign Up"}
          </h1>

          <input
            className="border-b-2 p-2  bg-transparent focus:outline-none focus:caret-white"
            type="email"
            placeholder="abc@gmail.com"
            ref={email}
          />

          <input
            className="border-b-2 p-2 bg-transparent focus:outline-none focus:caret-white"
            type="password"
            placeholder="***********"
            ref={password}
          />

          <button
            className="border text-white w-20 p-1 text-lg font-bold rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover:scale-110 hover:transition-all ease-in-out"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Login" : "SignUp"}
          </button>
          <p className="text-white cursor-pointer hover:underline hover:text-yellow-300 hover:font-bold
          " 
          onClick={handleSignIn}>
            {isSignIn ? "New to Ecom? Sign Up" : "Existing User? Log In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

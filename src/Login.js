import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_img } from './Utils/Constants'

import { checkValidation } from "./Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
// import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";

const Login = () => {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSign = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setIsLoggedIn(!isLoggedIn);
  };

  const handleButtonClick = () => {
    const msg = checkValidation(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: email.current.value,
            photoURL: "https://lh3.googleusercontent.com/ogw/AKPQZvzGj1QmquojV7NBJfSGzPI-ObSAhGbEgrwmbFY2EA=s32-c-mo",
          })
            .then(() => {
          // navigate("/browser");
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User already existed please Sign In");

          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "User not found please Sign Up";
          setErrorMessage(errorMessage);
        });
    }

    if (!msg) {
      email.current.value = "";
      password.current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
        className=" h-screen object-cover w-screen"
          src={bg_img}
          alt="bg-page"
        />
      </div>
      <form
        onSubmit={handleSubmit} // Attach the form submission handler
        className="absolute w-8/12 md:w-6/12 lg:w-4/12 my-36 p-12 bg-black mx-auto left-0 right-0 bg-opacity-80 text-white"
      >
        <h1 className="text-3xl font-semibold">
          {isLoggedIn ? "Sign in" : "Sign up"}
        </h1>
        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#333] rounded-md shadow-lg "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-[#333] rounded-md  shadow-lg"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full bg-[#333] rounded-md  shadow-lg"
        />
        <p className="font-medium text-lg text-red-700">{errorMessage}</p>
        <button
          type="submit"
          onClick={handleButtonClick}
          className="p-4 my-6 bg-[#e50914] w-full rounded-lg text-lg shadow-lg"
        >
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </button>
        <button onClick={toggleSign} className="text-gray-400 font-bold">
          New to Netflix?{" "}
          <span className="font-semibold text-lg text-white ">
            {" "}
            Sign up now
          </span>
        </button>
        <p className="text-sm pt-7">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="font-semibold text-blue-700 text-lg">
            {" "}
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

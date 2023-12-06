import React from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./Utils/userSlice";
import { netflix_logo, supportedLanguages, userLogo } from "./Utils/Constants";
import { toggleGptSearch } from "./Utils/GptSlice";
import { changeLanguage } from "./Utils/ConfigSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const user = useSelector((store) => store.user);
  const gptShowValue = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    // By default Mobile phone and if you write Md: dekstop
    <div
      className="flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black flex-col absolute w-full z-10 
    md:flex-row"
    >
      <img
        alt="netflix-logo"
        className="w-44 mx-auto md:mx-0 "
        src={netflix_logo}
      />

      {user && (
        <div className="flex md:p-3 p-0  justify-between">
          {gptShowValue && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-600 m-1 rounded-lg text-lg  text-white p-2"
            >
              {supportedLanguages.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="py-2 px-2 m-2 bg-purple-900  text-base md:text-xl text-white rounded-lg mx-2 my-1 hover:bg-purple-800"
          >
            {gptShowValue ? "Home Page" : "Gpt Search"}
          </button>
          z
          <img
            alt="user"
            className=" hidden md:block h-12 w-12 rounded-md"
            src={userLogo}
          />
          <button
            onClick={handleSignout}
            className="ml-2 p-2  font-semibold text-base md:text-xl text-white bg-green-700 border border-black rounded-lg hover:bg-white hover:text-black md:p-2"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

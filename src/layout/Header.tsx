import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex flex-row justify-between px-4 py-2 border">
      <div className="flex flex-row w-32 items-center justify-evenly">
        {user?.photoURL && (
          <img
            className=" w-9 h-9 rounded-full"
            src={user.photoURL}
            alt="profile"
          />
        )}

        <p>{user?.displayName}</p>
      </div>

      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default Header;

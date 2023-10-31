import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../component/Login";
import { signOut } from "firebase/auth";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  if (!user) {
    return <Login />;
  }

  console.log(user);

  return (
    <div>
      <p>로그인 성공</p>

      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default Home;

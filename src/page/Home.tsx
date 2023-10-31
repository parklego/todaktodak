import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../component/Login";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

  return <div>로그인 성공</div>;
};

export default Home;

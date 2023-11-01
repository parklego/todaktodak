import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Header from "../layout/Header";
import Login from "./Login";

const Home = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Header from "../layout/Header";
import Login from "./Login";
import Accordions from "../component/Accordions";

const Home = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }
  console.log(user);
  return (
    <div>
      <Header />
      <Accordions title="test" content="contents" />
    </div>
  );
};

export default Home;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Header from "../layout/Header";
import Login from "./Login";
import { Spinner, Button } from "@chakra-ui/react";
import Story from "../component/Story";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  console.log(user);
  return (
    <div>
      <Header />

      <Story />
      <Button colorScheme="linkedin" variant="solid">
        나도 사연 쓰러가기
      </Button>
    </div>
  );
};

export default Home;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Spinner, Button } from "@chakra-ui/react";
import Story from "../component/Story";
import Layout from "../layout/Layout";
import { useRecoilValue } from "recoil";
import { storyStateSelector } from "../selector/user";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const isEdit = useRecoilValue(storyStateSelector);

  const nativage = useNavigate();

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
    <Layout>
      <Story />
      <div className=" flex justify-center my-5">
        <Button
          size={"lg"}
          colorScheme="linkedin"
          variant="solid"
          onClick={() => nativage("/send")}
        >
          {isEdit ? "사연 이어쓰기" : "사연 쓰러가기"}
        </Button>
      </div>
    </Layout>
  );
};

export default Home;

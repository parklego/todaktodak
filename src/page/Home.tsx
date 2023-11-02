import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Button } from "@chakra-ui/react";
import Story from "../component/Story";
import Layout from "../layout/Layout";
import { useRecoilValue } from "recoil";
import { storyStateSelector } from "../selector/user";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Spinners from "../component/Spinners";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const isEdit = useRecoilValue(storyStateSelector);

  const nativage = useNavigate();

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastActive: serverTimestamp(),
          photoURL: user.photoURL,
          displayName: user.displayName,
        },
        {
          merge: true,
        }
      );
    }
  }, [user]);

  if (!loading && !user) {
    return <Login />;
  }

  if (loading) <Spinners />;

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

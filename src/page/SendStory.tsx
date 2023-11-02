import React, { FormEvent } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { storyState } from "../atom/story";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Input from "../component/Input";
import Alert from "../component/Alert";

const SendStory = () => {
  const [story, setStory] = useRecoilState(storyState);
  const [user] = useAuthState(auth);

  const nativage = useNavigate();

  const sendStory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (story.editStory.trim().length === 0) return;

    await addDoc(collection(db, `story`), {
      title: story.editTitle,
      text: story.editStory,
      reply: "",
      name: user?.displayName,
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        Alert(
          "success",
          "성공",
          "사연을 성공적으로 보냈습니다. 답변은 1-2일 정도 소요됩니다."
        );
        setStory({ ...story, editTitle: "", editStory: "" });
      })
      .catch((e) => {
        Alert(
          "error",
          "실패",
          "사연을 보낼 수 없습니다. 잠시후 다시 시도하여 주세요."
        );
      });
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center m-4 ">
        <div className="w-full">
          <Input
            type="text"
            id="사연 제목"
            value={story.editTitle}
            placeholder="사연의 제목을 입력해주세요."
            onChange={(e) => setStory({ ...story, editTitle: e.target.value })}
          />
        </div>
        <label className="my-2">사연 내용</label>
        <textarea
          className="w-full border-2 rounded resize-none p-2"
          rows={12}
          value={story.editStory}
          placeholder="사연의 내용을 적어주세요. 다른 페이지로 이동하더라도 작성중인 내용은 유지됩니다."
          onChange={(e) => setStory({ ...story, editStory: e.target.value })}
        />
      </div>
      <div className="flex justify-center my-5">
        <form onSubmit={sendStory}>
          <Button type="submit" colorScheme="green" size={"lg"}>
            사연 보내기
          </Button>
        </form>
      </div>

      <div className=" flex justify-center my-5">
        <Button
          size={"lg"}
          colorScheme="linkedin"
          variant="solid"
          onClick={() => nativage("/")}
        >
          홈으로 가기
        </Button>
      </div>
    </Layout>
  );
};

export default SendStory;

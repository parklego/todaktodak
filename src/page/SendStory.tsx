import React from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { storyState } from "../atom/story";

const SendStory = () => {
  const [story, setStory] = useRecoilState(storyState);

  const nativage = useNavigate();

  return (
    <Layout>
      <div className="flex justify-center m-4">
        <textarea
          className="w-full border-2 rounded resize-none"
          rows={18}
          value={story.editStory}
          placeholder="사연을 보내주세요. 다른 페이지로 이동하더라도 작성중인 내용은 유지됩니다."
          onChange={(e) => setStory({ ...story, editStory: e.target.value })}
        />
      </div>
      <div className="flex justify-center my-5">
        <Button colorScheme="green" size={"lg"}>
          사연 보내기
        </Button>
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

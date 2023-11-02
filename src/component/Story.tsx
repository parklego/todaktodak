import React from "react";
import { Accordion } from "@chakra-ui/react";
import Accordions from "./Accordions";
import { db } from "../firebase"; // 위에서 정의한 firebase 설정 파일
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { StoryItem } from "../types";
const Story = () => {
  const q = query(collection(db, "story"), orderBy("timestamp", "desc"));

  const [storyList] = useCollectionData(q);

  const storyItems = storyList?.map((item, idx) => {
    return (
      <Accordions key={idx} title={item.title} content={item as StoryItem} />
    );
  });

  return (
    <div className=" lg:flex lg:justify-center p-5">
      <Accordion className="h-[60vh] overflow-scroll lg:w-[80%] " allowToggle>
        {storyItems}
      </Accordion>
    </div>
  );
};

export default Story;

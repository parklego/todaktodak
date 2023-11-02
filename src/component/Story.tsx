import React from "react";
import { Accordion } from "@chakra-ui/react";
import Accordions from "./Accordions";

const Story = () => {
  // Todo : 각 story items firebase에서 가져와서 map으로 뿌려주기
  return (
    <div className=" lg:flex lg:justify-center p-5">
      <Accordion className="h-[70vh] overflow-scroll lg:w-[80%] " allowToggle>
        <Accordions title="test" content="contents" />
        <Accordions title="test" content="contents" />
      </Accordion>
    </div>
  );
};

export default Story;

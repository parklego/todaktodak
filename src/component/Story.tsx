import React from "react";
import { Accordion } from "@chakra-ui/react";
import Accordions from "./Accordions";

const Story = () => {
  // Todo : 각 story items firebase에서 가져와서 map으로 뿌려주기
  return (
    <div>
      <Accordion allowToggle>
        <Accordions title="test" content="contents" />
      </Accordion>
    </div>
  );
};

export default Story;

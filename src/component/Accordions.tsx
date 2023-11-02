import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import StoryCard from "./StoryCard";
import { StoryItem } from "../types";

interface AccordionProps {
  title: string;
  content: StoryItem;
}

const Accordions = ({ title, content }: AccordionProps) => {
  return (
    <div className="mt-2 ">
      <AccordionItem className="border-2 rounded">
        <h2>
          <AccordionButton className="flex justify-between ">
            <div className="">{title}</div>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <StoryCard content={content as StoryItem} />
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Accordions;

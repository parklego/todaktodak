import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import StoryCard from "./StoryCard";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordions = ({ title, content }: AccordionProps) => {
  return (
    <div>
      <AccordionItem className="border-none">
        <h2>
          <AccordionButton className="flex justify-between">
            <div className="">{`오늘 날씨가 좋네요.`}</div>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <StoryCard />
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Accordions;

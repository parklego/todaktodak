import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordions = ({ title, content }: AccordionProps) => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <div>{title}</div>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{content}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;

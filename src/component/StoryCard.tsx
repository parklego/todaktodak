import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { StoryItem } from "../types";

interface StoryCardProps {
  content: StoryItem;
}

const StoryCard = ({ content }: StoryCardProps) => {
  const reply =
    content.reply.length !== 0
      ? content.reply
      : "사연을 읽고 있는 중입니다. 잠시만 기다려주세요. ^^";
  return (
    <>
      {/* 사연부분 */}
      <Card className=" my-4">
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">{content.name}</Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text className=" font-nanumDahaeng">{content.text}</Text>
        </CardBody>
      </Card>

      {/* 답변부분   */}
      <Card className=" my-4">
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">토닥토닥</Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>

        <CardBody>
          <Text className=" font-nanumSungsil">{reply}</Text>{" "}
        </CardBody>
      </Card>
    </>
  );
};

export default StoryCard;

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

interface StoryCardProps {}

const StoryCard = () => {
  return (
    <>
      <Card maxW="md">
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">박만두</Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text className=" font-nanumDahaeng text-xl">
            {`오늘은 날씨가 정말 좋네요. 저는 나들이를 나왔어요. 단풍이 조금 떨어지긴 했지만 알록달록하게 아직 남은 단풍을 보면서
          여유롭게 거리를 돌아다니고 있어요. `}
          </Text>
        </CardBody>
      </Card>

      <Card maxW="md">
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
          <Text className=" font-nanumSungsil text-xl">
            {`맞아요! 오늘 날씨가 정말 좋네요. 어느덧 한 해가 끝나가네요. 이번 겨울에는 화이트 크리스마스일까요? 눈이 펑펑왔으면 좋겠네요 :) 따뜻하게 옷 입으시고, 건강 조심하세요 ^^`}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default StoryCard;

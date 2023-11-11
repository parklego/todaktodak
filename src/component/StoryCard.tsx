import {
  Flex,
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { StoryItem } from "../types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

interface StoryCardProps {
  content: StoryItem;
}

const StoryCard = ({ content }: StoryCardProps) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const checkVerification = user?.email === content.email;

  const reply =
    content.reply.length !== 0
      ? content.reply
      : "사연을 읽고 있는 중입니다. 잠시만 기다려주세요. ^^";

  return (
    <>
      {/* 사연부분 */}
      <Card className=" my-4">
        <CardHeader>
          <div className=" flex flex-row  w-full justify-between items-center">
            <Heading size="sm">{content.name || "어느 누군가"}</Heading>
            <p>
              {checkVerification && (
                <Button
                  colorScheme="gray"
                  size={"sm"}
                  onClick={() =>
                    navigate("/edit", {
                      state: content,
                    })
                  }
                >
                  수정하기
                </Button>
              )}
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <Text className=" font-nanumDahaeng text-lg">{content.text}</Text>
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
          <Text className=" font-nanumSungsil text-lg">{reply}</Text>{" "}
        </CardBody>
      </Card>
    </>
  );
};

export default StoryCard;

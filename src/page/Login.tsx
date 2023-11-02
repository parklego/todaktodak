import React from "react";
import { Button } from "@chakra-ui/react";
import Input from "../component/Input";
import Alert from "../component/Alert";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import logo from "../asset/logo.jpg";
import bg from "../asset/bg.jpg";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const deviceCheck = () => {
    const kakaoCheck = () => {
      return /KAKAOTALK/i.test(navigator.userAgent);
    };

    if (kakaoCheck()) {
      alert(
        "혹시 카카오 브라우저에서 열었나요? 크롬, 사파리와 같이 다른 브라우저를 이용해주세요."
      );
    } else {
      signInWithGoogle();
    }
  };

  return (
    <div className="flex flex-wrap content-center lg:items-center h-screen ">
      <div className="w-full lg:w-5/12">
        <div className="flex flex-col justify-center items-center  ">
          <img className=" w-1/2" src={logo} alt="logo" />
          <Input type="text" id="이메일"></Input>
          <Input type="password" id="비밀번호"></Input>
        </div>

        <div className="flex flex-col items-center mt-5">
          <Button
            colorScheme="purple"
            className="w-3/6 p-2 m-1 rounded"
            onClick={() =>
              Alert(
                "warning",
                "안내",
                "현재 일반 계정으로 로그인 할 수 없습니다."
              )
            }
          >
            일반 계정으로 로그인
          </Button>
          <Button
            colorScheme="red"
            className="w-3/6 p-2 m-1 rounded"
            onClick={deviceCheck}
          >
            구글 계정으로 로그인
          </Button>
        </div>
      </div>
      <div className=" hidden lg:block w-full lg:w-7/12">
        <img
          className=" lg:w-screen lg:h-screen"
          src={bg}
          alt="background"
        ></img>
      </div>
    </div>
  );
};

export default Login;

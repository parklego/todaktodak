import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Input from "../component/Input";
import Alert from "../component/Alert";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import logo from "../asset/logo.jpg";
import bg from "../asset/bg.jpg";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import Spinners from "../component/Spinners";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const loginUser = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          toast.success("로그인 성공");
          navigate("/");
        } else {
          signOut(auth);
          Alert("info", "안내", "이메일 인증을 완료한 후 시도하여주세요.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          text: error.message,
          confirmButtonText: "확인",
        });
      });
  };

  return (
    <>
      {isLoading && <Spinners />}
      <div className="flex flex-wrap content-center lg:items-center  ">
        <div className="w-full lg:w-5/12">
          <div className="flex flex-col justify-center items-center  ">
            <img className=" w-1/2 mt-5" src={logo} alt="logo" />
            <Input
              type="text"
              id="Email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              id="Password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>

          <div className=" flex justify-center text-blue-700 ml-[40%]">
            <button onClick={() => navigate("/register")}>회원가입</button>
          </div>

          <div className="flex flex-col items-center mt-5">
            <Button
              colorScheme="purple"
              className="w-3/6 p-2 m-1 rounded"
              onClick={loginUser}
            >
              일반 계정으로 로그인
            </Button>
            <ToastContainer />
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
    </>
  );
};

export default Login;

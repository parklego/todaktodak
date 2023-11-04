"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import Spinners from "../component/Spinners";
import Input from "../component/Input";
import Swal from "sweetalert2";
import { Button } from "@chakra-ui/button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (e: any) => {
    e.preventDefault();

    console.log("email", email);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      return toast.error("이메일 양식이 올바르지 않습니다.");
    }
    if (!email || !password || !confirmPassword) {
      return toast.error("빈 칸이 없는지 확인해주세요.");
    }
    if (password !== confirmPassword) {
      return toast.error("비밀번호가 일치하지 않습니다.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await sendEmailVerification(user).then((res) => {
          console.log(res);
        });

        setIsLoading(false);

        Swal.fire({
          icon: "info",
          text: "토닥토닥 회원이 되신 것을 환영합니다. 언제나 토닥토닥은 당신을 응원합니다. ",
          confirmButtonText: "확인",
        }).then((result) => {
          if (result.isConfirmed) {
            signOut(auth);
            navigate("/");
          }
        });
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
      <section className="h-screen flex flex-col justify-center items-center">
        <p className="my-10">당신의 사연이 궁금하군요.</p>
        <form className="w-[80%] lg:w-[25%]">
          <Input
            type="email"
            id="Email"
            value={email}
            placeholder="이메일"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="Password"
            value={password}
            placeholder="비밀번호"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            value={confirmPassword}
            placeholder="비밀번호 확인"
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />

          <div className="flex justify-center mt-5">
            <Button size={"lg"} variant="solid" onClick={registerUser}>
              회원가입
            </Button>
            <ToastContainer />
          </div>

          <div className=" flex justify-center my-5">
            <Button
              size={"lg"}
              variant="solid"
              colorScheme="linkedin"
              onClick={() => navigate(-1)}
            >
              뒤로가기
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;

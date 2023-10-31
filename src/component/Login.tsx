import React from "react";
import Input from "../component/Input";
import Alert from "../component/Alert";

const Login = () => {
  return (
    <div className="flex flex-wrap content-center lg:items-center h-screen ">
      <div className="w-full lg:w-5/12">
        <div className="flex flex-col justify-center items-center  ">
          <img className=" w-1/2" src="/asset/logo.jpg" alt="logo" />
          <Input type="text" id="아이디"></Input>
          <Input type="password" id="비밀번호"></Input>
        </div>

        <div className="flex flex-col items-center mt-5">
          <button
            className="w-3/6 border-2 p-2 m-1 rounded hover:bg-red-200"
            onClick={() =>
              Alert(
                "warning",
                "안내",
                "현재 일반 계정으로 로그인 할 수 없습니다."
              )
            }
          >
            일반 계정으로 로그인
          </button>
          <button className="w-3/6 border-2 p-2 m-1 rounded hover:bg-yellow-200">
            구글 계정으로 로그인
          </button>
        </div>
      </div>
      <div className=" hidden lg:block w-full lg:w-7/12">
        <img
          className=" lg:w-screen lg:h-screen"
          src="/asset/bg.jpg"
          alt="background"
        ></img>
      </div>
    </div>
  );
};

export default Login;

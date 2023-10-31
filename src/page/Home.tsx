import React from "react";
import Input from "../component/Input";

const Home = () => {
  return (
    <div className="flex flex-wrap content-center lg:items-center h-screen ">
      <div className="w-full lg:w-5/12">
        <div className="flex flex-col justify-center items-center  ">
          <img className=" w-3/5" src="/asset/logo.jpg" alt="logo" />
          <Input type="text" id="아이디"></Input>
          <Input type="password" id="비밀번호"></Input>
        </div>

        <div className="flex justify-center ">
          <button className="w-3/6 border-2 p-2 m-12 rounded hover:bg-yellow-200">
            구글 로그인
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

export default Home;

import React, { Suspense, lazy } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { RecoilRoot } from "recoil";
import Spinners from "./component/Spinners";

const Home = lazy(() => import("./page/Home"));
const SendStory = lazy(() => import("./page/SendStory"));
const EditStory = lazy(() => import("./page/EditStory"));
const Register = lazy(() => import("./page/Register"));

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<Spinners />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/send" element={<SendStory />}></Route>
              <Route path="/edit" element={<EditStory />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;

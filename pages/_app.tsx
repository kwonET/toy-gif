// pages/_app.tsx

import { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  type CtgrType = string;
  const cdata: CtgrType[] = ["유머", "메롱"];
  return (
    <>
      <Header cdata={cdata}></Header>
      <Component {...pageProps} />
    </>
  );
}

export default App;

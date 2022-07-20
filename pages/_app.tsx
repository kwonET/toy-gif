// pages/_app.tsx

import { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import { CtgrList } from "../util/dummy";
function App({ Component, pageProps }: AppProps) {
  type CtgrType = string;
  const cdata: CtgrType[] = CtgrList;
  return (
    <>
      <Header cdata={cdata}></Header>
      <Component {...pageProps} />
    </>
  );
}

export default App;

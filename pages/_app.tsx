// pages/_app.tsx

import { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { CtgrList } from "../util/dummy";
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  type CtgrType = string;
  const cdata: CtgrType[] = CtgrList;
  const {push}=useRouter();

  useEffect(()=>{
    push('/?ctgr=기본');
  })

  return (
    <>
      <Header cdata={cdata}></Header>
      <Component {...pageProps} />
    </>
  );
}
export default App;

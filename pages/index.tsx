// pages/index.tsx

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import { LineItm } from "../components/items/LineItem";
import { dummyData } from "../util/dummy";
import { useRouter } from "next/router";
import { PicsType } from "../util/dummy";
import html2canvas from "html2canvas";
import htmlToImage from "html-to-image";
import download from "downloadjs";
import axios from "axios";

type CtgrType = string;
const Home = (pageProps) => {
  const { push, query } = useRouter();
  const { id } = pageProps;
  const [ctgrValue, setCtgrValue] = useState<PicsType>(null);
  const [start, setStart] = useState<boolean>(null);
  const [num, setNum] = useState<number>(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const start = false;
    const target = id;
    if (target != "기본") {
      let resultContainer = dummyData.filter(({ ctgrs }) => {
        //dummyData중에서도 { ctgrs }를 가져온다 (자료형 : PicType[])
        return ctgrs.includes(target);
      });
      setStart(true);
      setCtgrValue(resultContainer);
      const random = Math.floor(Math.random() * resultContainer.length);
      setNum(random);
    }
  }, [id]);

  const onClickSaveTo = () => {
    const onCapture = () => {
      console.log("onCapture");
      html2canvas(document.querySelector("#my-gif")).then((canvas) => {
        onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
      });
    };
    const onSaveAs = (url, filename) => {
      console.log("onSaveAs");
      var link = document.createElement("a");
      if (typeof link.download === "string") {
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(url);
      }
    };

    onCapture();
  };

  return (
    <BodyWrapper>
      <CenterWrapper>
        {/* <LineItm></LineItm> */}
        <ImgWrapper>
          <div>
            <GifWrapper id="my-gif">
              {ctgrValue && <img src={`${ctgrValue[num].imgUrl}`} />}
              <input type="text" ref={inputRef} />
            </GifWrapper>
          </div>
          <LineItm></LineItm>
          <BtnWrapper onClick={() => onClickSaveTo()}>저장하기</BtnWrapper>
        </ImgWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};

Home.getInitialProps = (context) => {
  //SSR
  const { ctgr } = context.query;
  return { id: ctgr };
};

export default Home;
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
`;

const CenterWrapper = styled.div`
  /* width:100%; */
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
`;

// const BodyWrapper = styled.div`
//   display: flex;
//   top: 200px;
// `;

// const CenterWrapper = styled.div`
//   width: 1200px;
//   height: 650px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   flex-direction: column;
// `;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 600px;
  /* 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column; */
`;

const GifWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;

  & > img {
    width: 90%;
  }
  & > input {
    position: absolute;
    z-index: 10;
    top: 650px;
    /* top: 62%;
    left: 45%; */
    border: none;
    outline: none;
    background-color: none;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 24px;
  }
`;

const BtnWrapper = styled.div`
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  /* position: absolute; */
  width: 177px;
  height: 70px;
  /* left: 628px;
top: 860px; */

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 70px;
  /* identical to box height */

  color: #000000;
`;

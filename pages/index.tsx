// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components"
import { LineItm } from "../components/items/LineItem";

export default function Home() {
  // const [text, setText] = useState<string>("자바스크립트");

  return (
    <BodyWrapper>
      <CenterWrapper>
          <ImgWrapper>
            사진
          </ImgWrapper>
          <BtnWrapper>
            저장하기
          </BtnWrapper>
          <LineItm></LineItm>
      </CenterWrapper>
    </BodyWrapper>
  );
}
const BodyWrapper=styled.div`
  display: flex;
  top: 200px;
`;

const CenterWrapper = styled.div`
  width:100%;
  height :700px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const ImgWrapper=styled.div`
width: 819px;
height: 458px;
`;
const BtnWrapper=styled.div`
/* position: absolute; */
width: 177px;
height: 70px;
/* left: 628px;
top: 860px; */

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 70px;
/* identical to box height */


color: #000000;
`;
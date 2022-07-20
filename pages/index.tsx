// pages/index.tsx

import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { LineItm } from "../components/items/LineItem";
import { dummyData } from "../util/dummy";
import { useRouter } from "next/router";
import { CtgrList } from "../util/dummy";

const Home = (pageProps) => {
  const { push, query } = useRouter();
  const { id } = pageProps;
  const [ctgrValue, setCtgrValue] = useState(null);
  const [start, setStart] = useState(null);

  useEffect(() => {
    const start = false;
    const target = id;
    let resultContainer = dummyData.filter(({ ctgrs }) => {
      //dummyData중에서도 { ctgrs }를 가져온다 (자료형 : PicType[])
      return ctgrs.includes(target);
    });
    setStart(true);
    setCtgrValue(resultContainer);
  }, [id]);

  const onClickSaveTo = () => {
    // 저장기능추가
  };
  return (
    <BodyWrapper>
      <CenterWrapper>
        {/* <LineItm></LineItm> */}
        <ImgWrapper>
          {ctgrValue &&(<img src={`${ctgrValue[0].imgUrl}`} />)}
        </ImgWrapper>

        <LineItm></LineItm>
        <BtnWrapper onClick={() => onClickSaveTo}>저장하기</BtnWrapper>
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
  top: 200px;
`;

const CenterWrapper = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

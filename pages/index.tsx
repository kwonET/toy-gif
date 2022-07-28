// pages/index.tsx

import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import Head from "next/head";
import styled from "styled-components";
import { LineItm } from "../components/items/LineItem";
import { dummyData } from "../util/dummy";
import { useRouter } from "next/router";
import { PicsType } from "../util/dummy";
import html2canvas from "html2canvas";

type CtgrType = string;
const Home = (pageProps) => {
  const { push, query } = useRouter();
  const { id } = pageProps;
  const [ctgrValue, setCtgrValue] = useState<PicsType>(null);
  const [start, setStart] = useState<boolean>(null);
  const [num, setNum] = useState<number>(null);
  const inputRef = useRef(null);
  const saveRef = useRef(null);
  const [text, setText] = useState(null);
  const [input, setInput] = useState(null);

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
      setText("");
    }
  }, [id]);

  const onClickSaveTo = async () => {
    const element = saveRef.current;
    const canvas = await html2canvas(element, {
      backgroundColor: "none",
      logging: true,
      useCORS: true, //to enable cross origin perms
    });
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      console.log("");
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const onChange = (e) => {
    let inputValue = e.target.value; //제대로 들어옴.
    setText(inputValue);
    document.getElementById("spanStrWidth").innerText = inputValue;

    inputRef.current.style.width =
      document.getElementById("spanStrWidth").offsetWidth+6+"px";
      console.log(document.getElementById("spanStrWidth").offsetWidth);//inputRef.current.offsetWidth는 getter, style.width가 setter.
  };

  return (
    <BodyWrapper>
      <CenterWrapper>
        {/* <LineItm></LineItm> */}
        <ImgWrapper>
          <div className="my-gif" ref={saveRef}>
            <GifWrapper id="my-gif">
              {/* {ctgrValue && <img src={`${ctgrValue[num].imgUrl}`} />} */}
              {ctgrValue && <img src={`${ctgrValue[num].imgUrl}`} />}
              <span id="spanStrWidth"></span>
              <input
                type="text"
                value={text}
                ref={inputRef}
                onChange={onChange}
                // width={inputValue}
              />
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

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 600px;

  & > #my-gif {
    width: 500px;
    height: 600px;
  }
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
  & > span {
    visibility: hidden;
    position: absolute;
    top: -10000;
    font-size: 18px;
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
    /* padding-left: 10px; */
    font-size: 18px;
    font-family: "DOSGothic";
    text-align: center;
    min-width: 50px;
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

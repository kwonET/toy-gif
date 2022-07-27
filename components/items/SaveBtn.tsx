import React from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import axios from 'axios';

const uploadImgur = (url) => {
  const apiBase = "https://api.imgur.com/3/image";
  axios
    .post(
      apiBase,
      {
        image: url,
        type: "base64",
      },
      {
        headers: {
          Authorization: "Client-ID " + "9b3b1c0f6592f1a",
        },
      }
    )
    .then((res) => {
      // setShareImg(res.data.data.link);
    })
    .catch((e) => {
      console.log(e);
    });
};

const onClickSaveTo = async () => {
  let url = "";
  await (
    await html2canvas(document.getElementById("my-gif"))
  ).then(async (canvas) => {
    url = await canvas.toDataURL("image/jpg").split(",")[1];
    // setOpen(true);
  });

  await uploadImgur(url);
};

const SaveBtn = () => {
  const onClickSaveTo = async () => {
    // if (typeof window !== "object") {
    var node = document.getElementById("my-gif");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        console.log("저장 중");
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something wents wrong!", error);
      });
    // var dataUrl = "/";
    // var node = document.getElementById("my-gif");
    // let canvas = await htmlToImage.toCanvas(node);
    // download(canvas.toDataURL("image/png"), "my-gif.png");
    // }
  };

  return <BtnWrapper onClick={() => onClickSaveTo()}>저장하기</BtnWrapper>;
};

export default SaveBtn;

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

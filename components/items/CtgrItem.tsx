import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export const CtgrItm = ({ transCtgrVal, ctgrName }) => {
  const [ctgrChoice, setCtgrChoice] = useState(null);
  const {push}=useRouter();

  const onClickSelect = (ctgrName) => {
    setCtgrChoice(ctgrName);
    push(`ctgr=${ctgrName}`);
  };

  useEffect(() => {
    transCtgrVal(ctgrChoice);
    // console.log(ctgrChoice);
  }, [ctgrChoice]);

  return (
    <CtgrWrapper onClick={() => onClickSelect(ctgrName)}>
      <CtgrTextWrapper>{ctgrName}</CtgrTextWrapper>
    </CtgrWrapper>
  );
};

const CtgrWrapper = styled.div`
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  /* position: absolute; */
  width: 89px;
  height: 70px;
  /* left: 1146px;
  top: 192px; */

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 70px;
  /* identical to box height */

  color: #000000;
`;
const CtgrTextWrapper = styled.div``;

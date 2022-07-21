import styled from "styled-components";
import { CtgrItm } from "./items/CtgrItem";
import { LineItm } from "./items/LineItem";
import { useState } from "react";

type CtgrType = string;
export const Header = ({ cdata }: { cdata: CtgrType[] }) => {
  const [ctgrValue, setCtgrValue] = useState<CtgrType>('');

  // console.log(ctgrValue);
  return (
    <HeaderWrapper>
      <CenterWrapper>
        <TitleWrapper>
          <div className="text">짤생성기</div>
        </TitleWrapper>
        <LineItm></LineItm>
        <CtgrListWrapper>
          {cdata.map((item) => {
            return (
              <CtgrItm
                transCtgrVal={setCtgrValue}
                key={item.key}
                ctgrName={item}
              />
            );
          })}
        </CtgrListWrapper>
      </CenterWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  /* 짤방생성기 */

  /* position: absolute; */
  width: 1200px;
  height: 104px;
  gap: 32px;
  /* left: 40px;
  top: 56px; */

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 104px;

  color: #000000;
  & > .text {
    display: flex;
  }
`;
const CtgrListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const CenterWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 1394px;
  height: 200px;
  overflow: hidden;
`;

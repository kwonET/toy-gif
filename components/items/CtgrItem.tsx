import styled from "styled-components";

export const CtgrItm = ({ ctgrName }) => {
  return (
      <CtgrWrapper>
        <CtgrTextWrapper> 
         {
          ctgrName
         }
        </CtgrTextWrapper>
      </CtgrWrapper>
  );
};

const CtgrWrapper = styled.div`

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
const CtgrTextWrapper = styled.div`
`;
import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

// Components
import FullButton from "../Buttons/FullButton";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            <Typist>Investing in a Digital Future </Typist>
          </h1>
            <HeaderP className="font15 semiBold">
            <Typist>
              The Market Economy In 2025: A Visualization Exercise Emergence of
              New Capital Markets. To any market participant who has been more
              than 10 years in activity, financial markets are unrecognisable,
              lampooning the laws of physics....
              </Typist>
            </HeaderP>
          <BtnWrapper>
            <FullButton title="Explore" />
          </BtnWrapper>
        </div>
      </LeftSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const HeaderP = styled.div`
  max-width: 850px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

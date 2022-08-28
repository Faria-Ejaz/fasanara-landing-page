import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
// Components
import MediaBox from "../Elements/MediaBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/svg/undraw_mobile_marketing_re_p77p.svg";
import AddImage2 from "../../assets/svg/undraw_revenue_re_2bmg.svg";
import AddImage3 from "../../assets/svg/undraw_investment_re_rpk5.svg";
import AddImage4 from "../../assets/svg/undraw_educator_re_ju47.svg";

export default function Media() {
  return (
    <Wrapper id="medias" style={{ position: "relative" }}>
      <div style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Media</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <MediaBoxRow className="flex">
            <MediaBoxWrapper>
              <MediaBox
                img="media1"
                title="Interview | May 2022"
                subtitle="With Sifted EU we shared our thoughts and opinion on Crypto and why it's the best time to launch our new Fasanara VCIII fund."
              />
            </MediaBoxWrapper>
            <MediaBoxWrapper>
              <MediaBox
                img="media2"
                title="Funding News | May 2022"
                subtitle="Press release of our Fasanara VCIII announcement covered by The Block, the leading global information service about Crypto and Blockchain."
              />
            </MediaBoxWrapper>
            <MediaBoxWrapper>
              <MediaBox
                img="media1"
                title="Sky News"
                subtitle="Sky News coverage of our Fasanara VCIII launch."
              />
            </MediaBoxWrapper>
          </MediaBoxRow>
        </div>
        <div>
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">
                  <Typist delay={900}>Scenarios</Typist>
                </h2>
                <p className="font15">
                  <Typist delay={900}>
                    At a time in which bonds are no longer bonds but rather tax
                    bills, and equities are as expensive as washing machines
                    going on auction at 50 thousand dollars, what role is left
                    to play for us rationale investors?
                  </Typist>{" "}
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Load More"
                      action={() => alert("clicked")}
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="media" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="media" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="media" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="media" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: "relative";
  width: 100%;
`;
const MediaBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const MediaBoxWrapper = styled.div`
position: 'relative'
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  position: "relative";
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: fit-content;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
  }
`;
const AddImgWrapp3 = styled.div`
  width: 40%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
  }
`;
const AddImgWrapp4 = styled.div`
  width: fit-content;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
  }
`;

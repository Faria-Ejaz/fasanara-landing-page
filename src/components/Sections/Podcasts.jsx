import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
// Components
import PodcastBox from "../Elements/PodcastBox";
import FullButton from "../Buttons/FullButton";
// Assets
import PodcastImg1 from "../../assets/svg/undraw_podcast_1.svg";
import PodcastImg2 from "../../assets/svg/undraw_crypto_flowers_re_dyqo.svg";
import PodcastImg3 from "../../assets/svg/undraw_finance_re_gnv2.svg";
import PodcastImg4 from "../../assets/svg/undraw_investment_re_rpk5.svg";
import PodcastImg5 from "../../assets/svg/undraw_investment_data_re_sh9x.svg";
import PodcastImg6 from "../../assets/svg/undraw_lost_online_re_upmy.svg";
import DigitalFutureImage from "../../assets/svg/undraw_online_ad_re_ol62.svg";

export default function Podcasts() {
  return (
    <Wrapper id="podcasts">
      <div style={{ position: "relative" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Podcasts</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg5}
                title="E-Book | Aug 2018"
                text="Financial Complexity & Nonlinear Dynamics"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg2}
                title="Feb22. The Curious Learners"
                text="Focus on investments in financial services across TradFi, DeFi and CeFi."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg3}
                title="Dec21. MacroVoices"
                text="Plotting a Course for Digitization of Financial Markets."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg4}
                title="Outlooks | Aug 2019"
                text="Transformational  Markets: History Being Made"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg1}
                title="Jul22. The N@ked Short Club"
                text="Two trends in finance - Fintech + Crypto."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PodcastBox
                img={PodcastImg6}
                title="Scenarios | Jun 2016"
                text="The Market Economy In 2020. The Emergence of a New Monetary Orthodoxy"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={DigitalFutureImage} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">
                <Typist>Digital Future</Typist>
              </h2>
              <p className="font15">
                <Typist>
                  Use Of Digital Technology To Build Resilient Portfolios. Going
                  Beyond 60/40 Traditional Asset Allocation.
                </Typist>
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton title="Explore" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Load More"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 30% 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

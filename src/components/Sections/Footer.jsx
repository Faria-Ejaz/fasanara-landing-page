import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/img/fasanara-logo.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }
  

  return (
    <Wrapper>
      <div className="darkBg" style={{position: 'relative'}}>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "10px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
            <img src={LogoImg} alt="logo" className="radius6" />
              {/* <LogoImg /> */}
              <h1 className="font15 extraBold whiteColor" >
                Fasanara Capital
              </h1>
            </Link>
            <StyleP className="whiteColor font15">
              © {getCurrentYear()} - <span className="purpleColor font15">Fasanara Capital Ltd</span> All Right Reserved
            </StyleP>
            <Link className="whiteColor animate pointer font15" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
  img{
    max-width: 100px;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
import React from "react";
import styled from "styled-components";
// Assets
import Media1 from "../../assets/img/Screenshot1.png";
import Media2 from "../../assets/img/Screenshot2.png";

export default function MediaBox({img, title, subtitle}) {
  let getImg;

  switch (img) {
    case "media1":
      getImg = <img src={Media1} width="90%" height='90%' alt="media" className="radius6" />
      break;
    case "media2":
      getImg = <img src={Media2} width="90%" height='90%' alt="media" className="radius6" />
      break;
    default:
      getImg = <img src={Media2} width="90%" height='90%' alt="media" className="radius6" />
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      {getImg}
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font15">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
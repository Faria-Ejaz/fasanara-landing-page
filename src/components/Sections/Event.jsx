import React from "react";
import styled from "styled-components";
// Components
import EventBox from"../Elements/EventBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Event() {
  return (
    <Wrapper id="event">
      <div style={{position: 'relative'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Recent & Upcoming Events</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="Private Credit European Leadership Summit"
                text="We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine.”"
                location="Kimpton Fitzroy London"
                date="28 September 2022"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="FTT DeFi 2022"
                text="We were at the Fintech Talents DeFi event, where we discussed What the cryptoverse means for lending."
                location="County Hall, Westminster, London"
                date="12 July 2022"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="Business Forum for Alt Funds"
                text="We participated and spoke about importance of ESG, the post-pandemic world, key legal developments, crypto and other topics."
                location="London"
                date="18 May 2022"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="AIM Summit"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                location="London"
                date="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="FTT Embedded Finance"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                location="London"
                date="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <EventBox
                title="LendIt Fintech 2022"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                location="London"
                date="Luke Skywalker, 2 days ago"
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
      <div id="team" style={{padding: '50px 0', position: 'relative'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Insights from the team</h1>
            <p className="font15">
            Our Outlooks, Cookies and Scenarios on the market 
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
position: 'relative';
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
position: 'relative';
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
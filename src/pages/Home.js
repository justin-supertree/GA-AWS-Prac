import React from "react";
import styled from "@emotion/styled";

import ContentCard from "../component/ContentCard";

import "../App.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

const MainSection = styled.div`
  height: 700px;
  padding-top: 60px;
  text-align: Center;
  background-color: lightyellow;

  & > h1 {
    margin: 0;
  }
`;

const ContentArea = styled.div`
  width: 1000px;
  margin: auto;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <MainSection>
        <h1>MainPage</h1>
        <ContentArea>
          <ContentCard type="Polygon" />
          <ContentCard type="Eth" />
          <ContentCard type="PlayDapp" />
        </ContentArea>
      </MainSection>
    </Container>
  );
};

export default Home;

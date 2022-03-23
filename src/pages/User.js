import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  padding-top: 60px;
  background-color: lightyellow;
`;

const User = () => {
  return (
    <Container>
      <MainSection>Here is User Page.</MainSection>
    </Container>
  );
};

export default User;

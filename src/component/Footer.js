import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 200px;
  font-size: 36px;
  font-weight: 700;
  background: lightblue;
`;
const Footer = () => {
  return <FooterContainer>Footer Area</FooterContainer>;
};

export default Footer;

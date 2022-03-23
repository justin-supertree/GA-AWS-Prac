import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  width: 250px;
  min-height: 400px;
  padding: 30px;
  border-radius: 15px;
  background-color: #ffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const CardIamge = styled.img`
  width: auto;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const CardText = styled.div`
  margin-top: 35px;
  & > h1 {
  }
`;

const CardButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    transition: 0.3s;
  }
`;

const ContentCard = ({ type }) => {
  return (
    <CardContainer id={type}>
      {type === "Polygon" && <CardIamge src={"../../images/polygon.png"} />}
      {type === "Eth" && <CardIamge src={"../../images/eth.png"} />}
      {type === "PlayDapp" && <CardIamge src={"../../images/playdapp.png"} />}

      <CardText>
        <h1>{type}</h1>
      </CardText>

      <CardButton>
        {type === "Polygon" && "Pick Polygon"}
        {type === "Eth" && "Pick Eth"}
        {type === "PlayDapp" && "Pick PlayDapp"}
      </CardButton>
    </CardContainer>
  );
};

export default ContentCard;

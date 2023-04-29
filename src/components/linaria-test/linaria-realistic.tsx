import React from "react";
import { styled } from "@linaria/react";
import { generateData, getRandomColor } from "../../utils";



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Item = styled.span<{ color: string }>`
  font-size: 18px;
  margin-bottom: 8px;
  background-color: ${({ color }) => color};

  &:nth-child(even) {
    font-weight: bold;
  }
`;

const LinariaRealistic = () => {
  const items = generateData();
  const color = "#ddccdd";
  const title = "LinariaRealistic";

  const DynamicStyle = styled.span`
    color: ${color};
  `;

  return (
    <Container>
      <Title>{title}</Title>
      {items.map((item, index) => (
        <Item key={index} color={getRandomColor()}>
          {item} <DynamicStyle>Dynamic style with color {color}</DynamicStyle>
        </Item>
      ))}
    </Container>
  );
};

export default LinariaRealistic;

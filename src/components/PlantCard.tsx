import React from "react";
import styled from "@emotion/styled";

export type PlantCardProps = {
  name: string;
  imageUrl: string;
};

const Card = styled.div`
  width: 200px;
  height: 250px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Name = styled.h2`
  font-size: 20px;
  color: #333333;
  margin-top: 0;
  font-family: "Roboto", sans-serif;
`;

const PlantCard: React.FC<PlantCardProps> = ({ name, imageUrl }) => (
  <Card>
    <Image src={imageUrl} alt={name} />
    <Name>{name}</Name>
  </Card>
);

export default PlantCard;

import React, { useEffect } from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const AppName = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Subtitle = styled.h5`
  font-size: 1.5rem;
  margin-top: 10px;
  max-width: 800px;
`;

const CTAButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Home = () => {

  const handleStartNow = () => {
    window.location.href = "/detection";
  };

  return (
    <HomePageContainer>
      <AppName>Human Trafficking Prevention System</AppName>
      <Title>Combat Human Trafficking and Violence</Title>
      <Subtitle>Leverage AI to Detect, Prevent, and Support Victims</Subtitle>
      <CTAButton onClick={handleStartNow}>Start Now</CTAButton>
    </HomePageContainer>
  );
};

export default Home;

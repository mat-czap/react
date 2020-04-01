import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import TweenMax from 'gsap';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTop = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color:white;
  margin: 20px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0 10vw 30px;
  color: white;
`;

const StyledAuthCard = styled.div`
  * {display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  

  @media(max-width: 768px){
    width: 80vw;
    height: 50vh;
    padding-bottom: 10vh;
  }
`;

const AuthTemplate = ({ children }) => {
  const wrapRef = useRef(null);

  useEffect(() => {
    TweenMax.from(wrapRef.current, 0.9, {
      x: '60%',
      delay: 0.5,
      ease: 'bounce',
      opacity: 0,
      scale: 0.6,
    });
  });

  return (
    <StyledWrapper>
      <StyledTop>Ludos..</StyledTop>
      <StyledHeading> Authentication view<br/> log in to add some new relations </StyledHeading>
      <StyledAuthCard ref={wrapRef}>{children}</StyledAuthCard>
    </StyledWrapper>
  );
};
export default AuthTemplate;

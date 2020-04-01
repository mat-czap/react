import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
// import Nav from '../components/organisms/Nav';
import { PlayHooks } from '../providers/PlayHooks';
import GetUsers from '../components/organisms/GetUsers';
import GetPhotos from '../components/organisms/GetPhotos';
import { ReactComponent as Man } from '../assets/man.svg';
import MagicScroll from '../components/molecules/MagicScroll';

// const StyledWrapper = styled.div`
//   position: relative;
//   height: 100vh;
//   width:100vw;
//   display:flex;
//   background-color: ${({ theme }) => theme.grey100};
//   justify-content: flex-start;
//   align-items: center;
//   flex-direction: column;
// `;

const StyledTop = styled.div`
  position: relative;
  width: 100vw;
  background-color: white;

  @media (max-width: 768px) {
    /* height: 100%; */
    * {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;
    }
  }
`;

const WrapPlays = styled.div`
  margin: 0;
  top: 0;

  /* border: 2px solid red; */

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0;
    border: solid 2px green;
  }
`;

const WrapUsers = styled.div`
  @media (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;

const Header = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  /* color: black; */
  padding: 30px 0px 0 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  /* border: 2px solid; */
`;

const WrapperSvg = styled.div`
width: 100%;

@media(max-width: 768px) {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  
  height:90vh;
  
`;

const StyledMan = styled(Man)`
  width: 100vw;
  /* border: 2px solid; */
  height: 100%;
  overflow: hidden;
`;

const UserPage = () => {
  const refMan = useRef(null);
  const refLogo = useRef(null);
  const refWrapUser = useRef(null);
  const refUsers = useRef(null);

  
  useEffect(() => {
    /* // setTl(gsap.timeline({paused:true, autoAlpha:0})); */
    refMan.current.style.visibility = 'hidden';
    const [manElements] = refMan.current.children;
    const man = manElements.getElementById('man');
    const sign = manElements.getElementById('leftSign');
    const arrow = manElements.getElementById('arrow');
    const arrowInner = manElements.getElementById('arrowInner');

    gsap.set([man, sign, arrow, arrowInner], { autoAlpha: 0 });
    const tl = gsap.timeline({ delay: 1 });

    refMan.current.style.visibility = 'visible';

    tl.fromTo(
      [man],
      { autoAlpha: 0, y: -300 },
      { autoAlpha: 1, scale: 1.2, x: '-=40', y: '+=100', duration: 0.5 },
    )
      .fromTo(
        [refLogo.current],
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 0.7, ease: 'bounce' },
        '-=0.3',
      )
      .fromTo(
        [sign],
        { y: 270, x: 250, scale: 0.5 },
        { autoAlpha: 1, scale: 1, duration: 0.7 },
        '-=1',
      )
      /* // .fromTo([arrow], {  y: 700, x: 50,  scale: .5 }, { autoAlpha: 1 , scale: 1, duration: .7 }, "-=.4")       */
      .fromTo(
        [arrowInner],
        { y: 600, x: 50 },
        {
          autoAlpha: 1,
          transformOrigin: '50% 50%',
          scale: 1.2,
          ease: 'Power1.easeOut',
          duration: 1.3,
          repeat: -1,
          yoyoEase: 'Power0.easeOut',
        },
        '-=.4',
      )
      .play();

    console.log(refMan.current.getBoundingClientRect());
  }, []);


  return (
    <StyledTop id="styledTop" ref={refWrapUser}>
      <WrapPlays id="WrapPlays">
        <Header style={{ visibility: 'hidden' }} ref={refLogo}>
          Ludos...
        </Header>
        <WrapperSvg ref={refMan} style={{ visibility: 'hidden', height: '100%' }}>
          <StyledMan />
        </WrapperSvg>
      </WrapPlays>
      <WrapUsers id="WrapUsers">
        <GetUsers ref={refUsers}/>
      </WrapUsers>
      <MagicScroll/>
      <GetPhotos />
    </StyledTop>
  );
};

export default UserPage;

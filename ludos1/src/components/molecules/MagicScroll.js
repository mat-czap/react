import React, { useEffect, useState, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

const Wrapper = styled.div`
  height: 200vh;
  border: solid 4px red;
  overflow: hidden;
`;
const Top = styled.div`
  height: 50vh;
  width: 100%;
  background-color: pink;
  border: solid 2px pink;
  min-height: 300px;
`;
const Middle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
  background-color: white;
  overflow: hidden;
  border: solid 3px green;
`;

const RefDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  height: 100px;
  width: 120px;
  background-color: blue;
  top: 100px;
`;

const Bottom = styled.div`
  height: 50vh;
  width: 100%;
  background-color: pink;
  /* min-height: 200px; */
`;

const MagicScroll = () => {
  ScrollMagicPluginGsap(ScrollMagic, gsap);
  const refBox = useRef(null);
  const refBox2 = useRef(null);
  const refBox3 = useRef(null);
  const refBox4 = useRef(null);

  const refMiddle = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    // const [elements] = refMiddle.current.children;
    // console.log(elements);

    const tl = gsap.timeline();

    const x = tl
      .fromTo(
        [refBox.current],
        { autoAlpha: 0 },
        { borderRadius: 30, autoAlpha: 1, x: 65, y: 100, duration: 1 },
      )
      .fromTo(
        [refBox2.current],
        { autoAlpha: 1 },
        { borderRadius: 30, autoAlpha: 1, x: -65, y: 100, duration: 1 },
        '-=1',
      )
      .fromTo(
        [refBox3.current],
        { autoAlpha: 0 },
        { borderRadius: 30, autoAlpha: 1, x: -65, y: 220, duration: 1 },
        '-=1',
      )
      .fromTo(
        [refBox4.current],
        { autoAlpha: 0 },
        { borderRadius: 30, autoAlpha: 1, x: 65, y: 220, duration: 1 },
        '-=1',
      );

    new ScrollMagic.Scene({
      //   triggerElement: '.middle',
      triggerElement: '#middle',
      triggerHook: 0,
      //   triggerHook: 'onEnter',
      // duration: 300,

      //   reverse: false,
    })
      .setTween(x)
      .addTo(controller); // assign the scene to the controller
  }, []);

  return (
    <Wrapper>
      <Top id="top">Top</Top>
      <Middle ref={refMiddle} id="middle" className="middle">
        <h1>middle</h1>
        <RefDiv id="a1" ref={refBox}>
          uzytkownicy w bazie
        </RefDiv>
        <RefDiv id="a2" ref={refBox2} />
        <RefDiv id="a3" ref={refBox3} />
        <RefDiv id="a4" ref={refBox4} />
      </Middle>
      <Bottom id="bottom">Bottom</Bottom>
    </Wrapper>
  );
};

export default MagicScroll;

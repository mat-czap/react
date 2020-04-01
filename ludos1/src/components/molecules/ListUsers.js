/* eslint-disable no-lone-blocks */
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap/all';
import styled from 'styled-components';
import SingleCard from '../organisms/SingleCard';

const Divy = styled.div`
  visibility: hidden;
`;

const Wrapper = styled.div`
  height: 70%;
  overflow-y: scroll; 
  overflow-x: hidden; 
  background-color: ${({theme})=> theme.grey100};
  border-radius: 30px;
`;

const ListUsers = ({ users, toggle}) => {
  const wrapper = useRef(null);
  const [elements, setElements] = useState();

  const [tl] = useState(
    gsap.timeline({ onStart: () => setLoading(false), paused: true, autoAlpha: 0 }),
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const [...items] = wrapper.current.children;
    tl.fromTo(
      [items],
      { x: 100 },
      {
        autoAlpha: 1,
        stagger: 0.1,
        x: 0,
        duration: 0.4,
        ease: 'Power3.easeOut',
      },
    );
  }, []);

  useEffect(() => {
    console.log('useEffect toggle');
    const [...items] = wrapper.current.children;
    setLoading(true);

    if (toggle) {
      tl.play();

      // eslint-disable-next-line no-undef

      // t1.to(refTest.current, { rotation: 360 }).play();
    } else {
      tl.reverse();
    }
  }, [toggle]);

  const refTest = useRef(null);
  const t1 = gsap.timeline({ paused: true, reversed: true });

  return (
    <Wrapper id="wrapper" ref={wrapper}>
      {loading && toggle && (
        <button style={{ marginTop: '40px' }} className="button is-loading is-large is-rounded " />
      )}

      {users.map((el, i) => (
        <Divy name="divs neccessary to catch refs for SingleCards" key={el.id}>
          <SingleCard even={Boolean(i % 2)} key={el.id} users={el} />
        </Divy>
      ))}

      <h1 ref={refTest}>@Mateusz Czapranski</h1>
    </Wrapper>
  );
};

export default ListUsers;

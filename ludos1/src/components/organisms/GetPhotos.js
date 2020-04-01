import React, { useEffect, useState } from 'react';
import Macy from 'macy';
import styled from 'styled-components';

const Wrapper = styled.div``;

const GetPhotos = () => {
  const [x, setX] = useState([]);

  

  useEffect(() => {
    const msnry = Macy({
      container: '.wrapper',
      mobileFirst: true,
      columns: 1,
      breakAt: {
        430: 2,
        700: 3,
        1100: 4,
      },
      margin: {
        x: 10,
        y: 10,
      },
    });
  }, [x]);

  useEffect(() => {
    const MathRandom = () => {
      const z = Math.floor(Math.random() * 1000);
      return z;
      console.log(z);
    };

    console.log('GetPhoto UseEffect');

    let photosLinks = [];

    for (let i = 0; i <= 10; i++) {
      photosLinks = [
        ...photosLinks,
        {
          name: 'Mat',
          url: `https://picsum.photos/id/${MathRandom()}/400/300`,
        },
      ];
    }
    setX(photosLinks);
  }, []);

 

  return (
    <Wrapper className="wrapper">
      {x.map(link => (
        <img id={link} style={{ display: 'block' }} src={link.url} />
      ))}
    </Wrapper>
  );
};

export default GetPhotos;

import React, { useRef, useState } from 'react';

const HelloUseRef = () => {
  const renders = useRef(0);
  
  console.log(renders.current)
  
  const [suprise, setSuprise] = useState(false);

  if (renders.current === 5) {
    setSuprise(true);
  }

  return (
    <>
      
      <div>Hello {suprise && <div>surprise!</div>}</div>
    </>
  );
};

export default HelloUseRef;

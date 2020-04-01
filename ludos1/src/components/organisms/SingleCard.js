import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Heading from '../atoms/Heading/Heading';


const Card = styled.div`
  position: relative;
  width: 300px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  margin-top: 20px;
  background-color: ${(props) => (props.even ?  'grey' : 'white')};
  
  /* */
  }
`;

const StyledHeading = styled(Heading)`
  display: block;
`;

const SingleCard = ({ users, even }) => {
  const { id, email, username } = users;

 
  return (
    <Card key={id} even={even}>
      <StyledHeading>Login: {username}</StyledHeading>
      <StyledHeading>Email: {email}</StyledHeading>
    </Card>
  );
};

export default SingleCard;

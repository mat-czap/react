import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-bulma-switch/lib';
import ListUsers from './ListUsers';

const List = styled.div`
height: 100hv;
overflow: hidden;

`;

const ListUsersTemplate = ({ users }) => {
  const [toggle, setToggle] = useState(false);
  const [pointerState, setPointer] = useState(true);

  
  const handleToggle = () => {
    setToggle(!toggle);
  };

 

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   pointerState
  //     ? ((disable.current.style.pointerEvents = ''), setPointer(false))
  //     : (disable.current.style.pointerEvents = '');
  // }, [pointerState]);


  console.log(`pointer: ${pointerState}, toggle: ${toggle}`);

  return (
    <List>
      <h3 className="title is-3">Users</h3>
      <div className="field">
        <input
          id="switchRoundedSuccess"
          type="checkbox"
          name="switchRoundedSuccess"
          className="switch is-rounded is-success is-large "
        />
        <label onClick={handleToggle} htmlFor="switchRoundedSuccess">
          show all
        </label>
      </div>

      <ListUsers
        key="listUsers"
        toggle={toggle}
        users={users}
      />
    </List>
  );
};

export default ListUsersTemplate;

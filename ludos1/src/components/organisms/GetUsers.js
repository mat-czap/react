import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ListUsersTemplate from '../molecules/ListUsersTemplate';

const Users = [
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  },
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  }
  ,
  {
    "username" : "mat1",
    "email" : "emads@sakd.p"
  },
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  },
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  }, 
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"  
  },
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  },
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  }, 
  {
    "username" : "mat2",
    "email" : "emads@sakd.p"
  }
];

const GetUsers = () => {
  const [users, setUsers] = useState([...Users]);

  useEffect(() => {
    const getTokenLS = () => localStorage.getItem('token');
    const token = getTokenLS();

    fetch('http://localhost:5000/users', {
      headers: { 'Content-Type': 'application/json', Authorization: token },
    })
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); 

  

  return (
    <>
      {users.length !==0 ? 
      (
            <ListUsersTemplate users={users} />
      ) : (
        <button className="button is-loading is-large is-rounded is-warning" />
      )}
    </>
  );
};

export default GetUsers;

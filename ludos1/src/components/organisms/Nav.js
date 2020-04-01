import React from 'react';
import styled from 'styled-components';

const Topbar = styled.div`
    position: fixed;
    height: 100vh;
    width:350px;
    top: 0;
    right: 0;
    background-color: ${({theme})=> theme.tertiary};
    z-index:9999;
`;

const Nav = () =>{
return <Topbar />
}

export default Nav;
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Ul = styled.ul`

background: #fff;
padding: 20px;
position: fixed;
width: 80%;
top: 15vh;
right: 0;
color: #000;
height: 100vh;
z-index: 3;
color: #000;
transform: ${({open}) => open ? 'translateX(0)' : 'translateX(110%)'};
transition: transform .3s ease-in-out;
`;


const ListBurger = ({open}) => {
    return (
        <Ul open={open} className="list-borgar">
            <Link to="/">Home</Link>
            <hr/>
            <Link to="/posts">Posts</Link>
            <hr/>
            <Link to="/albums">Albums</Link>
            <hr/>
            <Link to="/search-users">Find User</Link>
            <hr/>
        </Ul>
    )
}

export default ListBurger;
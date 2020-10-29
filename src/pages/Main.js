import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import MainPosts from '../components/MainPosts';


function Main(){

    const [isOpen,setIsOpen] = useState(false)


    // const Menu = styled.nav`
    //     transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    // `;


    return(
        <div className='wrap'>
        <h1>Main page</h1>
        <div className="wrapper-content">
            <MainPosts/>
        </div>

        {!isOpen && <i onClick={() => {
            setIsOpen(true)
            }} className="fas fa-bars"></i>}
        {isOpen && <i onClick={() => {
            setIsOpen(false)

            }} class="fas fa-chevron-right"></i>}


       {isOpen && <div className="hamburger">
            <Link to="/posts" className="main-link">Posts</Link>
            <Link to="/search-users" className="main-link">Search users</Link>
            <Link to="/albums" className="main-link">Albums</Link>
            </div>}

        </div>
    )
}

export default Main;

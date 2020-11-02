import React from 'react';
import MainPosts from '../components/MainPosts';


function Main(){

    return(
        <div className='wrap'>
        <h1>Main page</h1>

        <div className="wrapper-content">
            <MainPosts/>
        </div>
        </div>
    )
}

export default Main;

import React,{useState, useEffect} from 'react';
import { roll } from '../Random';
import {Link} from 'react-router-dom'
import Post from './Post';
import AnimationBlocks from './AnimationBlocks';

function MainPosts(){

    const [posts,setPosts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const prePosts = []
    const rand = [];
    roll(rand);


    useEffect(() => {
        for(let i = 0; i < 4; i++){
            fetch(`https://jsonplaceholder.typicode.com/posts/${rand[i]}`)
            .then(res => res.json())
            .then(json => {
                prePosts.push(json);
                if(prePosts.length === 4){
                  setPosts(prePosts);
                // console.log(prePosts)
                  setIsLoad(true);
                }
              })
        }
    },[])


    return(
        <>
        {!isLoad && <AnimationBlocks/>}
        {isLoad &&
            <div className="main-posts">
                {posts.map(post => <Post userId={post.userId} id={post.id} title={post.title}/>)}
                <Link to="/posts" className="link link-main">More</Link>
            </div>
        }
        </>
    )
}

export default MainPosts;

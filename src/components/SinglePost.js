import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import User from './User';
import AnimationBlocks from './AnimationBlocks';


function SinglePost(){

    const {id} = useParams();
    const [singlePost,setSinglePost] = useState({});
    const [loadPost,setLoadPost] = useState(false);




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setSinglePost(json)
                setLoadPost(true);
            })
    })
    return(
        <div className="single-post-wrapper">
            {!loadPost && <AnimationBlocks/>}
            {loadPost &&  <User userId={singlePost.userId}/>}
            <p className="single-post-title">{singlePost.title}</p>
            <p className="single-post-body">{singlePost.body}</p>
            {loadPost &&  <Link to="/posts"  className="link">Go back</Link>}
        </div>
    );
}

export default SinglePost


import React from 'react';
import {Link} from "react-router-dom";
import User from './User';


  function Post({userId, id, title}){

    return (
      <div className="single-post">
            <User userId={userId}/>
            <p className="single-post-title">{title}</p>
            <Link to={`posts/${id}`} className="link">See more</Link>
            <hr/>
      </div>
    );
  }
export default Post;

import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';

function Album({title,userId,id}){



    return(
        <div className="album-title">
            <h2 className="album-header">{title}</h2>
            <User userId={userId}/>
            <Link to={`/albums/${id}`} className="link">See Photos</Link>
            <hr/>
        </div>
    )
}

export default Album;
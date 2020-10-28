import React from 'react';

function Photo({title,url}){

    return(
        <div>
            <p className="single-photo-title">Photo title: <span className="single-photo-span">{title}</span></p>
            <img src={url} className="single-photo-img"/>
        </div>
    )
}

export default Photo;